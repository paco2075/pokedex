import * as React from "react";
import Image from "next/image";
import { Pokemon, typeColors, gen1Pokemon } from "@/data/pokemon";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// Helper to get the pre-evolution of a Pokemon
function getPreEvolution(pokemon: Pokemon, allPokemon: Pokemon[]): Pokemon | null {
  return allPokemon.find(p => p.evolutions?.includes(pokemon.id)) || null;
}

// Helper to get the complete evolution chain (including pre-evolutions)
function getCompleteEvolutionChain(pokemon: Pokemon, allPokemon: Pokemon[]): Pokemon[] {
  const chain: Pokemon[] = [];
  
  // First, find the base form by following pre-evolutions
  let baseForm = pokemon;
  let preEvo = getPreEvolution(baseForm, allPokemon);
  while (preEvo) {
    baseForm = preEvo;
    preEvo = getPreEvolution(baseForm, allPokemon);
  }
  
  // Now build the chain starting from the base form
  let current = baseForm;
  chain.push(current);
  
  while (current.evolutions && current.evolutions.length > 0) {
    // For branching evolutions, add all branches and stop
    const nextEvos = current.evolutions
      .map(evoId => allPokemon.find(p => p.id === evoId))
      .filter(Boolean) as Pokemon[];
      
    if (nextEvos.length === 0) break;
    
    if (nextEvos.length > 1) {
      chain.push(...nextEvos);
      break;
    }
    
    // For linear evolution, continue the chain
    current = nextEvos[0];
    chain.push(current);
  }
  
  return chain;
}

export function PokemonCard({ pokemon, nickname }: { pokemon: Pokemon, nickname?: string }) {
  const mainType = pokemon.type[0];
  const cardBg = typeColors[mainType] || "bg-white";
    const evolutionChain = getCompleteEvolutionChain(pokemon, gen1Pokemon);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={`border rounded-lg p-4 flex flex-col items-center gap-2 shadow transition-transform hover:scale-105 cursor-pointer ${cardBg} bg-opacity-80`}>
          <div className="relative w-32 h-32">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
              width={128}
              height={128}
              className="pixelated"
              priority={pokemon.id <= 20}
            />
          </div>
          <div className="text-xl font-bold drop-shadow-sm">
            <span className="text-gray-700 text-base mr-2">#{pokemon.id}</span>
            {nickname ? (
              <>
                <span>{nickname}</span>
                <span className="block text-xs text-gray-600 font-normal">({pokemon.name})</span>
              </>
            ) : (
              pokemon.name
            )}
          </div>
          <div className="flex gap-2">
            {pokemon.type.map((t) => (
              <span
                key={t}
                className={`px-2 py-1 rounded text-xs font-semibold shadow-sm border-2 border-white/80 ring-2 ring-black/10 ${typeColors[t] || "bg-gray-200 text-gray-800"}`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-4">
            <div className="relative w-16 h-16">
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
                width={64}
                height={64}
                className="pixelated"
              />
            </div>
            <div>
              <span className="text-gray-500">#{pokemon.id}</span> {pokemon.name}
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {pokemon.type.map((t) => (
                <span
                  key={t}
                  className={`px-3 py-1 rounded text-sm font-semibold shadow-sm ${typeColors[t] || "bg-gray-200"}`}
                >
                  {t}
                </span>
              ))}
            </div>
            
            {pokemon.stats && (
              <div>
                <h3 className="font-semibold mb-2">Stats</h3>
                <div className="space-y-2">
                  <div>HP: {pokemon.stats.hp}</div>
                  <div>Attack: {pokemon.stats.attack}</div>
                  <div>Defense: {pokemon.stats.defense}</div>
                  <div>Sp. Attack: {pokemon.stats.spAtk}</div>
                  <div>Sp. Defense: {pokemon.stats.spDef}</div>
                  <div>Speed: {pokemon.stats.speed}</div>
                </div>
              </div>
            )}

            {pokemon.weaknesses && pokemon.weaknesses.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">Weaknesses</h3>
                <div className="flex flex-wrap gap-2">
                  {pokemon.weaknesses.map((type) => (
                    <span
                      key={type}
                      className={`px-2 py-1 rounded text-xs font-semibold ${typeColors[type] || "bg-gray-200"}`}
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Evolution Chain */}
            {evolutionChain.length > 1 && (
              <div>
                <h3 className="font-semibold mb-2">Evolution Chain</h3>
                <div className="flex items-center gap-2 flex-wrap">
                  {evolutionChain.map((evo, index) => (
                    <React.Fragment key={evo.id}>
                      <div className={`flex flex-col items-center ${evo.id === pokemon.id ? 'ring-2 ring-blue-500 rounded-lg' : ''}`}>
                        <div className="relative w-16 h-16 bg-white/50 rounded p-1">
                          <Image
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evo.id}.png`}
                            alt={evo.name}
                            width={64}
                            height={64}
                            className="pixelated"
                          />
                        </div>
                        <span className="text-xs text-gray-600 mt-1">{evo.name}</span>
                        <span className="text-xs text-gray-400">#{evo.id}</span>
                      </div>
                      {index < evolutionChain.length - 1 && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Sprites</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative w-32 h-32 border rounded p-2 bg-white/50">
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                  alt={`${pokemon.name} front`}
                  width={128}
                  height={128}
                  className="pixelated"
                />
                <span className="text-xs text-gray-500">Front</span>
              </div>
              <div className="relative w-32 h-32 border rounded p-2 bg-white/50">
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`}
                  alt={`${pokemon.name} back`}
                  width={128}
                  height={128}
                  className="pixelated"
                />
                <span className="text-xs text-gray-500">Back</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
