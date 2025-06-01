"use client";
import * as React from "react";
import { gen1Pokemon, Pokemon } from "@/data/pokemon";
import { PokemonCard } from "@/components/PokemonCard";
import { Button } from "@/components/ui/button";

export type TeamMember = Pokemon & { nickname: string };
export type Team = {
  id: string;
  name: string;
  pokemon: TeamMember[];
};

const ITEMS_PER_PAGE = 20;

export function TeamBuilder() {
  const [teams, setTeams] = React.useState<Team[]>([]);
  const [currentTeamId, setCurrentTeamId] = React.useState<string | null>(null);
  const [showNewTeamModal, setShowNewTeamModal] = React.useState(false);
  const [newTeamName, setNewTeamName] = React.useState("");
  const [nicknameInput, setNicknameInput] = React.useState("");
  const [pendingAdd, setPendingAdd] = React.useState<Pokemon | null>(null);
  const [page, setPage] = React.useState(1);
  const [user, setUser] = React.useState<string | null>(null);
  const [showAuthModal, setShowAuthModal] = React.useState(false);
  const [authMode, setAuthMode] = React.useState<'signin' | 'signup'>('signin');
  const [authUsername, setAuthUsername] = React.useState('');
  const [authPassword, setAuthPassword] = React.useState('');
  const [authError, setAuthError] = React.useState('');

  const currentTeam = React.useMemo(() => 
    teams.find(t => t.id === currentTeamId) || null
  , [teams, currentTeamId]);

  const totalPages = Math.ceil(gen1Pokemon.length / ITEMS_PER_PAGE);
  const paginatedPokemon = gen1Pokemon.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  // Persist user
  React.useEffect(() => {
    if (typeof window !== 'undefined' && user) {
      localStorage.setItem('pokedex_user', user);
    }
  }, [user]);

  // Load user from storage
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('pokedex_user');
      if (saved) setUser(saved);
    }
  }, []);

  // Load teams when user changes
  React.useEffect(() => {
    if (user) {
      const savedTeams = JSON.parse(localStorage.getItem(`pokedex_teams_${user}`) || '[]');
      setTeams(savedTeams);
      setCurrentTeamId(savedTeams[0]?.id || null);
    } else {
      setTeams([]);
      setCurrentTeamId(null);
    }
  }, [user]);

  // Save teams whenever they change
  React.useEffect(() => {
    if (user) {
      localStorage.setItem(`pokedex_teams_${user}`, JSON.stringify(teams));
    }
  }, [teams, user]);

  function handleAddClick(pokemon: Pokemon) {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    if (!currentTeam) {
      setShowNewTeamModal(true);
      return;
    }
    setNicknameInput(pokemon.name);
    setPendingAdd(pokemon);
  }

  function confirmAdd() {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    if (!currentTeam) {
      setShowNewTeamModal(true);
      return;
    }
    if (pendingAdd && currentTeam.pokemon.length < 6 && !currentTeam.pokemon.find((p) => p.id === pendingAdd.id)) {
      const updatedTeams = teams.map(team => 
        team.id === currentTeamId 
          ? { ...team, pokemon: [...team.pokemon, { ...pendingAdd, nickname: nicknameInput.trim() || pendingAdd.name }] }
          : team
      );
      setTeams(updatedTeams);
    }
    setPendingAdd(null);
    setNicknameInput("");
  }

  function removeFromTeam(pokemon: TeamMember) {
    if (!currentTeam) return;
    const updatedTeams = teams.map(team =>
      team.id === currentTeamId
        ? { ...team, pokemon: team.pokemon.filter(p => p.id !== pokemon.id) }
        : team
    );
    setTeams(updatedTeams);
  }

  function handleNewTeam(e: React.FormEvent) {
    e.preventDefault();
    if (!newTeamName.trim()) return;
    
    const newTeam: Team = {
      id: crypto.randomUUID(),
      name: newTeamName.trim(),
      pokemon: []
    };
    
    setTeams(prev => [...prev, newTeam]);
    setCurrentTeamId(newTeam.id);
    setNewTeamName("");
    setShowNewTeamModal(false);
  }

  function handleSignOut() {
    setUser(null);
    setTeams([]);
    setCurrentTeamId(null);
    localStorage.removeItem('pokedex_user');
  }

  function handleAuthSubmit(e: React.FormEvent) {
    e.preventDefault();
    setAuthError('');
    if (!authUsername || !authPassword) {
      setAuthError('Username and password required');
      return;
    }
    const users = JSON.parse(localStorage.getItem('pokedex_users') || '{}');
    if (authMode === 'signup') {
      if (users[authUsername]) {
        setAuthError('Username already exists');
        return;
      }
      users[authUsername] = authPassword;
      localStorage.setItem('pokedex_users', JSON.stringify(users));
      setUser(authUsername);
      setShowAuthModal(false);
    } else {
      if (!users[authUsername] || users[authUsername] !== authPassword) {
        setAuthError('Invalid username or password');
        return;
      }
      setUser(authUsername);
      setShowAuthModal(false);
    }
    setAuthUsername('');
    setAuthPassword('');
  }

  return (
    <div className="flex flex-col gap-6 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col gap-4 min-w-[300px] w-full max-w-md">
            <h2 className="text-2xl font-bold text-center">{authMode === 'signin' ? 'Sign In' : 'Sign Up'}</h2>
            <form onSubmit={handleAuthSubmit} className="flex flex-col gap-4">
              <input
                className="border rounded-lg px-4 py-2 text-lg"
                placeholder="Username"
                value={authUsername}
                onChange={e => setAuthUsername(e.target.value)}
                autoFocus
              />
              <input
                className="border rounded-lg px-4 py-2 text-lg"
                placeholder="Password"
                type="password"
                value={authPassword}
                onChange={e => setAuthPassword(e.target.value)}
              />
              {authError && <div className="text-red-500 text-sm">{authError}</div>}
              <Button type="submit" className="w-full text-lg py-6">{authMode === 'signin' ? 'Sign In' : 'Sign Up'}</Button>
            </form>
            <div className="flex justify-between text-sm mt-2">
              <button className="text-blue-600 hover:underline" onClick={() => setAuthMode(authMode === 'signin' ? 'signup' : 'signin')}>
                {authMode === 'signin' ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
              </button>
              <button className="text-gray-500 hover:underline" onClick={() => setShowAuthModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* New Team Modal */}
      {showNewTeamModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col gap-4 min-w-[300px] w-full max-w-md">
            <h2 className="text-2xl font-bold text-center">Create New Team</h2>
            <form onSubmit={handleNewTeam} className="flex flex-col gap-4">
              <input
                className="border rounded-lg px-4 py-2 text-lg"
                placeholder="Team Name"
                value={newTeamName}
                onChange={e => setNewTeamName(e.target.value)}
                maxLength={30}
                autoFocus
              />
              <div className="flex gap-3 justify-end">
                <Button variant="secondary" onClick={() => setShowNewTeamModal(false)} type="button" size="lg">Cancel</Button>
                <Button type="submit" size="lg">Create Team</Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-6">
        <h1 className="text-3xl sm:text-4xl font-bold">Pokédex Team Builder</h1>
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <span className="text-sm text-gray-700">Signed in as <b>{user}</b></span>
              <Button size="sm" variant="outline" onClick={handleSignOut}>Sign Out</Button>
            </>
          ) : (
            <Button size="lg" onClick={() => { setShowAuthModal(true); setAuthMode('signin'); }}>Sign In / Sign Up</Button>
          )}
        </div>
      </div>

      {/* Team Selection */}
      {user && (
        <div className="flex items-center gap-3 mb-6 p-4 bg-gray-50 rounded-xl">
          <select 
            className="flex-1 max-w-xs border rounded-lg px-4 py-2 bg-white text-lg"
            value={currentTeamId || ''}
            onChange={e => setCurrentTeamId(e.target.value || null)}
          >
            <option value="">Select a team...</option>
            {teams.map(team => (
              <option key={team.id} value={team.id}>{team.name}</option>
            ))}
          </select>
          <Button size="lg" onClick={() => setShowNewTeamModal(true)}>New Team</Button>
        </div>
      )}

      {/* Nickname Modal */}
      {pendingAdd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col gap-4 min-w-[300px] w-full max-w-md">
            <div className="text-xl font-bold">Give a nickname to {pendingAdd.name}?</div>
            <input
              className="border rounded-lg px-4 py-2 text-lg"
              value={nicknameInput}
              onChange={e => setNicknameInput(e.target.value)}
              maxLength={20}
              autoFocus
            />
            <div className="flex gap-3 justify-end">
              <Button variant="secondary" onClick={() => setPendingAdd(null)} size="lg">Cancel</Button>
              <Button onClick={confirmAdd} size="lg">Add to Team</Button>
            </div>
          </div>
        </div>
      )}

      {/* Current Team */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold">
            {currentTeam 
              ? `${currentTeam.name} (${currentTeam.pokemon.length}/6)` 
              : user 
                ? "Select or create a team to start" 
                : "Sign in to create teams"}
          </h2>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {currentTeam?.pokemon.map((pokemon) => (
            <div key={pokemon.id} className="relative aspect-square">
              <PokemonCard pokemon={pokemon} nickname={pokemon.nickname} />
              <Button
                variant="secondary"
                className="absolute top-2 right-2 h-8 w-8 p-0 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => removeFromTeam(pokemon)}
              >
                ×
              </Button>
            </div>
          ))}
          {currentTeam && Array.from({ length: 6 - (currentTeam?.pokemon.length || 0) }).map((_, i) => (
            <div
              key={i}
              className="border-2 border-dashed border-gray-300 rounded-xl aspect-square flex items-center justify-center bg-gray-50"
            >
              <span className="text-gray-400">Empty Slot</span>
            </div>
          ))}
        </div>
      </div>

      {/* Available Pokemon */}
      <div className="space-y-6 mt-8 pb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Available Pokémon</h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm">
            <span className="text-gray-600">
              Showing {((page - 1) * ITEMS_PER_PAGE) + 1} - {Math.min(page * ITEMS_PER_PAGE, gen1Pokemon.length)} of {gen1Pokemon.length}
            </span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                size="lg"
              >
                Previous
              </Button>
              <span className="px-4 py-2 text-gray-600 bg-gray-50 rounded-lg min-w-[100px] text-center">
                Page {page} of {totalPages}
              </span>
              <Button
                variant="outline"
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                size="lg"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
          {paginatedPokemon.map((pokemon) => (
            <div key={pokemon.id} className="relative aspect-square">
              <PokemonCard pokemon={pokemon} />
              <Button
                className="absolute top-2 right-2 shadow-lg hover:shadow-xl transition-shadow"
                size="sm"
                onClick={() => handleAddClick(pokemon)}
                disabled={
                  !currentTeam || 
                  currentTeam.pokemon.length >= 6 || 
                  Boolean(currentTeam.pokemon.find(p => p.id === pokemon.id))
                }
              >
                Add
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
