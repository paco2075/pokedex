"use client";
import * as React from "react";
import { gen1Pokemon, Pokemon } from "@/data/pokemon";
import { PokemonCard } from "@/components/PokemonCard";
import { Button } from "@/components/ui/button";

export type TeamMember = Pokemon & { nickname: string };

const ITEMS_PER_PAGE = 20;

export function TeamBuilder() {
  const [team, setTeam] = React.useState<TeamMember[]>([]);
  const [nicknameInput, setNicknameInput] = React.useState("");
  const [pendingAdd, setPendingAdd] = React.useState<Pokemon | null>(null);
  const [page, setPage] = React.useState(1);

  const totalPages = Math.ceil(gen1Pokemon.length / ITEMS_PER_PAGE);
  const paginatedPokemon = gen1Pokemon.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  function handleAddClick(pokemon: Pokemon) {
    setNicknameInput(pokemon.name);
    setPendingAdd(pokemon);
  }

  function confirmAdd() {
    if (pendingAdd && team.length < 6 && !team.find((p) => p.id === pendingAdd.id)) {
      setTeam([...team, { ...pendingAdd, nickname: nicknameInput.trim() || pendingAdd.name }]);
    }
    setPendingAdd(null);
    setNicknameInput("");
  }

  function removeFromTeam(pokemon: TeamMember) {
    setTeam(team.filter((p) => p.id !== pokemon.id));
  }

  return (
    <div className="flex flex-col gap-8">
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
        <h2 className="text-2xl font-bold mb-4">Your Team ({team.length}/6)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {team.map((pokemon) => (
            <div key={pokemon.id} className="relative">
              <PokemonCard pokemon={pokemon} nickname={pokemon.nickname} team={team} />
              <Button
                variant="secondary"
                className="absolute top-2 right-2 h-8 w-8 p-0 rounded-full"
                onClick={() => removeFromTeam(pokemon)}
              >
                ×
              </Button>
            </div>
          ))}
          {Array.from({ length: 6 - team.length }).map((_, i) => (
            <div
              key={i}
              className="border-2 border-dashed border-gray-300 rounded-lg h-48 flex items-center justify-center"
            >
              <span className="text-gray-400">Empty Slot</span>
            </div>
          ))}
        </div>
      </div>

      {/* Available Pokemon */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Available Pokémon</h2>
          <div className="flex items-center gap-4">
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {paginatedPokemon.map((pokemon) => (
            <div key={pokemon.id} className="relative group">
              <PokemonCard pokemon={pokemon} team={team} />
              {!team.find(p => p.id === pokemon.id) && team.length < 6 && (
                <Button
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  size="sm"
                  onClick={() => handleAddClick(pokemon)}
                >
                  Add
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
