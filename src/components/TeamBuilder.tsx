"use client";
import * as React from "react";
import { gen1Pokemon, Pokemon } from "@/data/pokemon";
import { gen1Moves, Move } from "@/data/moves";
import { PokemonCard } from "@/components/PokemonCard";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";
export type TeamMember = Pokemon & {
  nickname: string;
  moves: string[]; // array of move names, max 4
  learnableMoves?: string[]; // list of moves this pokemon can learn
};
export type Team = {
  id: string;
  name: string;
  pokemon: TeamMember[];
};

const ITEMS_PER_PAGE = 20;

export function TeamBuilder() {
  const { user } = useAuth();
  const [teams, setTeams] = React.useState<Team[]>([]);
  const [currentTeamId, setCurrentTeamId] = React.useState<string | null>(null);
  const [showNewTeamModal, setShowNewTeamModal] = React.useState(false);
  const [newTeamName, setNewTeamName] = React.useState("");
  const [nicknameInput, setNicknameInput] = React.useState("");
  const [pendingAdd, setPendingAdd] = React.useState<Pokemon | null>(null);
  const [page, setPage] = React.useState(1);
  const [showMoveModal, setShowMoveModal] = React.useState(false);
  const [selectedPokemon, setSelectedPokemon] = React.useState<TeamMember | null>(null);

  const currentTeam = React.useMemo(() => 
    teams.find(t => t.id === currentTeamId) || null
  , [teams, currentTeamId]);

  const totalPages = Math.ceil(gen1Pokemon.length / ITEMS_PER_PAGE);
  const paginatedPokemon = gen1Pokemon.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  // Load teams when user changes
  React.useEffect(() => {
    if (user) {
      const savedTeams = JSON.parse(localStorage.getItem(`pokedex_teams_${user.uid}`) || '[]');
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
      localStorage.setItem(`pokedex_teams_${user.uid}`, JSON.stringify(teams));
    }
  }, [teams, user]);

  function handleAddClick(pokemon: Pokemon) {
    if (!user) {
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
      return;
    }
    if (!currentTeam) {
      setShowNewTeamModal(true);
      return;
    }
    if (pendingAdd && currentTeam.pokemon.length < 6 && !currentTeam.pokemon.find((p) => p.id === pendingAdd.id)) {      const updatedTeams = teams.map(team => 
        team.id === currentTeamId 
          ? { ...team, pokemon: [...team.pokemon, { ...pendingAdd, nickname: nicknameInput.trim() || pendingAdd.name, moves: [], learnableMoves: gen1Moves.map(m => m.name) }] }
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

  function handleMoveChange(index: number, moveName: string) {
    if (!selectedPokemon || !currentTeam) return;
    
    // Prevent selecting the same move twice
    if (moveName && selectedPokemon.moves.includes(moveName) && !selectedPokemon.moves[index]?.includes(moveName)) {
      return;
    }
    
    const newMoves = [...selectedPokemon.moves];
    if (moveName === "") {
      newMoves.splice(index, 1);
    } else {
      newMoves[index] = moveName;
    }

    const updatedTeams = teams.map(team =>
      team.id === currentTeamId
        ? {
            ...team,
            pokemon: team.pokemon.map(p =>
              p.id === selectedPokemon.id
                ? { ...p, moves: newMoves }
                : p
            )
          }
        : team
    );
    setTeams(updatedTeams);
  }

  // Helper function to get move details
  function getMoveDetails(moveName: string): Move | undefined {
    return gen1Moves.find(move => move.name === moveName);
  }

  // Helper function to get type color class
  function getTypeColorClass(type: string): string {
    const typeColors: Record<string, string> = {
      Normal: "bg-gray-400",
      Fire: "bg-red-500",
      Water: "bg-blue-500",
      Electric: "bg-yellow-400",
      Grass: "bg-green-500",
      Ice: "bg-blue-200",
      Fighting: "bg-red-700",
      Poison: "bg-purple-500",
      Ground: "bg-yellow-600",
      Flying: "bg-indigo-400",
      Psychic: "bg-pink-500",
      Bug: "bg-lime-500",
      Rock: "bg-yellow-800",
      Ghost: "bg-purple-700",
      Dragon: "bg-indigo-600",
    };
    return typeColors[type] || "bg-gray-200";
  }

  return (
    <div className="flex flex-col gap-4 px-2 sm:px-4 md:px-6 max-w-7xl mx-auto w-full">
      {/* New Team Modal */}
      {showNewTeamModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-2">
          <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6 flex flex-col gap-4 min-w-[280px] w-full max-w-md mx-2">
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

      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 py-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Pokédex Team Builder</h1>
      </div>

      {/* Team Selection */}
      {user && (
        <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2 p-3 bg-gray-50 rounded-lg">
          <select 
            className="flex-1 border rounded-lg px-3 py-2 bg-white text-base"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-2">
          <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6 flex flex-col gap-4 min-w-[280px] w-full max-w-md mx-2">
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

      {/* Move Selection Modal */}
      {showMoveModal && selectedPokemon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-2">
          <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6 flex flex-col gap-4 min-w-[280px] w-full max-w-xl mx-2">
            <h2 className="text-2xl font-bold text-center">Select Moves for {selectedPokemon.nickname}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, i) => {
                const moveName = selectedPokemon.moves[i] || "";
                const moveDetails = getMoveDetails(moveName);
                return (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-medium text-gray-700">Move {i + 1}</label>
                      <select
                        value={moveName}
                        onChange={e => handleMoveChange(i, e.target.value)}
                        className={`border rounded-lg px-3 py-2 text-base appearance-none ${
                          moveName ? 'border-blue-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">-- Select Move --</option>
                        {gen1Moves
                          .filter(move => selectedPokemon.learnableMoves?.includes(move.name))
                          .map(move => {
                            const isSelected = selectedPokemon.moves.includes(move.name);
                            return (
                              <option 
                                key={move.name} 
                                value={move.name}
                                disabled={isSelected && !selectedPokemon.moves[i]?.includes(move.name)}
                              >
                                {move.name}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                    {moveDetails && (
                      <div className="text-sm">
                        <div className={`inline-block px-2 py-0.5 rounded text-white mb-1 ${getTypeColorClass(moveDetails.type)}`}>
                          {moveDetails.type}
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-gray-600">
                          {moveDetails.power !== null && (
                            <div>Power: {moveDetails.power}</div>
                          )}
                          {moveDetails.accuracy !== null && (
                            <div>Acc: {moveDetails.accuracy}%</div>
                          )}
                          <div>PP: {moveDetails.pp}</div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex gap-3 justify-end">
              <Button variant="secondary" onClick={() => setShowMoveModal(false)} size="lg">Cancel</Button>
              <Button onClick={() => setShowMoveModal(false)} size="lg">Confirm Moves</Button>
            </div>
          </div>
        </div>
      )}

      {/* Current Team */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold">
            {currentTeam 
              ? `${currentTeam.name} (${currentTeam.pokemon.length}/6)`              : user 
                ? "Select or create a team to start" 
                : "Login to create teams"}
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
          {currentTeam?.pokemon.map((pokemon) => (
            <div key={pokemon.id} className="relative aspect-square">
              <PokemonCard pokemon={pokemon} nickname={pokemon.nickname} />
              <Button
                variant="secondary"
                className="absolute top-1 right-1 h-7 w-7 p-0 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => removeFromTeam(pokemon)}
              >
                ×
              </Button>
              <Button
                onClick={() => { setSelectedPokemon(pokemon); setShowMoveModal(true); }}
                className="absolute bottom-1 left-1 px-2 h-7 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center gap-1"
                variant="outline"
              >
                <span className="text-xs">
                  {pokemon.moves.length}/4
                </span>
                <span>≡</span>
              </Button>
              {pokemon.moves.length > 0 && (
                <div className="absolute bottom-1 right-1 bg-white/90 rounded-full px-2 py-0.5 text-xs border shadow-sm">
                  {pokemon.moves.length} moves
                </div>
              )}
            </div>
          ))}
          {currentTeam && Array.from({ length: 6 - (currentTeam?.pokemon.length || 0) }).map((_, i) => (
            <div
              key={i}
              className="border-2 border-dashed border-gray-200 rounded-lg aspect-square flex items-center justify-center bg-gray-50"
            >
              <span className="text-gray-400 text-sm">Empty</span>
            </div>
          ))}
        </div>
      </div>

      {/* Available Pokemon */}
      <div className="space-y-4 mt-6">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold">Available Poketmon</h2>
            <span className="text-xs sm:text-sm text-gray-600">
              {((page - 1) * ITEMS_PER_PAGE) + 1} - {Math.min(page * ITEMS_PER_PAGE, gen1Pokemon.length)} of {gen1Pokemon.length}
            </span>
          </div>
          <div className="flex gap-2 justify-center">
            <Button
              variant="outline"
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              size="sm"
              className="w-24"
            >
              Previous
            </Button>
            <span className="px-3 py-1.5 text-sm text-gray-600 bg-gray-50 rounded-lg min-w-[80px] text-center">
              {page} / {totalPages}
            </span>
            <Button
              variant="outline"
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              size="sm"
              className="w-24"
            >
              Next
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
          {paginatedPokemon.map((pokemon) => (
            <div key={pokemon.id} className="relative aspect-square">
              <PokemonCard pokemon={pokemon} />
              <Button
                className="absolute top-1 right-1 shadow-lg hover:shadow-xl transition-shadow"
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
