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
    <div className="flex flex-col gap-8 px-2 sm:px-0">
      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4 min-w-[300px] w-full max-w-xs">
            <h2 className="text-xl font-bold mb-2 text-center">{authMode === 'signin' ? 'Sign In' : 'Sign Up'}</h2>
            <form onSubmit={handleAuthSubmit} className="flex flex-col gap-3">
              <input
                className="border rounded px-2 py-1 text-lg"
                placeholder="Username"
                value={authUsername}
                onChange={e => setAuthUsername(e.target.value)}
                autoFocus
              />
              <input
                className="border rounded px-2 py-1 text-lg"
                placeholder="Password"
                type="password"
                value={authPassword}
                onChange={e => setAuthPassword(e.target.value)}
              />
              {authError && <div className="text-red-500 text-sm">{authError}</div>}
              <Button type="submit" className="w-full">{authMode === 'signin' ? 'Sign In' : 'Sign Up'}</Button>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4 min-w-[300px] w-full max-w-xs">
            <h2 className="text-xl font-bold mb-2 text-center">Create New Team</h2>
            <form onSubmit={handleNewTeam} className="flex flex-col gap-3">
              <input
                className="border rounded px-2 py-1 text-lg"
                placeholder="Team Name"
                value={newTeamName}
                onChange={e => setNewTeamName(e.target.value)}
                maxLength={30}
                autoFocus
              />
              <div className="flex gap-2 justify-end">
                <Button variant="secondary" onClick={() => setShowNewTeamModal(false)} type="button">Cancel</Button>
                <Button type="submit">Create Team</Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <h1 className="text-3xl font-bold text-center my-4">Pokédex Team Builder</h1>

      {/* Auth Bar */}
      <div className="flex justify-end mb-2">
        {user ? (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700">Signed in as <b>{user}</b></span>
            <Button size="sm" variant="outline" onClick={handleSignOut}>Sign Out</Button>
          </div>
        ) : (
          <Button size="sm" onClick={() => { setShowAuthModal(true); setAuthMode('signin'); }}>Sign In / Sign Up</Button>
        )}
      </div>

      {/* Team Selection */}
      {user && (
        <div className="flex items-center gap-4 mb-4">
          <select 
            className="border rounded px-3 py-2 bg-white"
            value={currentTeamId || ''}
            onChange={e => setCurrentTeamId(e.target.value || null)}
          >
            <option value="">Select a team...</option>
            {teams.map(team => (
              <option key={team.id} value={team.id}>{team.name}</option>
            ))}
          </select>
          <Button onClick={() => setShowNewTeamModal(true)}>New Team</Button>
        </div>
      )}

      {/* Nickname Modal */}
      {pendingAdd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4 min-w-[300px]">
            <div className="font-bold text-lg mb-2">Give a nickname to {pendingAdd.name}?</div>
            <input
              className="border rounded px-2 py-1 text-lg"
              value={nicknameInput}
              onChange={e => setNicknameInput(e.target.value)}
              maxLength={20}
              autoFocus
            />
            <div className="flex gap-2 justify-end">
              <Button variant="secondary" onClick={() => setPendingAdd(null)}>Cancel</Button>
              <Button onClick={confirmAdd}>Add to Team</Button>
            </div>
          </div>
        </div>
      )}

      {/* Current Team */}
      <div>
        <h2 className="text-2xl font-bold mb-4 sm:mb-6">
          {currentTeam 
            ? `${currentTeam.name} (${currentTeam.pokemon.length}/6)` 
            : user 
              ? "Select or create a team to start" 
              : "Sign in to create teams"}
        </h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6">
          {currentTeam?.pokemon.map((pokemon) => (
            <div key={pokemon.id} className="relative">
              <PokemonCard pokemon={pokemon} nickname={pokemon.nickname} />
              <Button
                variant="secondary"
                className="absolute top-2 right-2 h-8 w-8 p-0 rounded-full"
                onClick={() => removeFromTeam(pokemon)}
              >
                ×
              </Button>
            </div>
          ))}
          {currentTeam && Array.from({ length: 6 - (currentTeam?.pokemon.length || 0) }).map((_, i) => (
            <div
              key={i}
              className="border-2 border-dashed border-gray-300 rounded-lg h-36 sm:h-48 flex items-center justify-center"
            >
              <span className="text-gray-400">Empty Slot</span>
            </div>
          ))}
        </div>
      </div>

      {/* Available Pokemon */}
      <div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-2 sm:gap-0">
          <h2 className="text-2xl font-bold mb-2 sm:mb-0">Available Pokémon</h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <span className="text-sm text-gray-600">
              Showing {((page - 1) * ITEMS_PER_PAGE) + 1} - {Math.min(page * ITEMS_PER_PAGE, gen1Pokemon.length)} of {gen1Pokemon.length}
            </span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                Previous
              </Button>
              <span className="px-4 py-2 text-sm text-gray-600">
                Page {page} of {totalPages}
              </span>
              <Button
                variant="outline"
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {paginatedPokemon.map((pokemon) => (
            <div key={pokemon.id} className="relative">
              <PokemonCard pokemon={pokemon} />
              <Button
                className="absolute top-2 right-2"
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
