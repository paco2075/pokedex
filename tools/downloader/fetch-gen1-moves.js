// fetch-gen1-moves.js
const nodeFetch = require('node-fetch');
const fs = require('fs');

async function getMove(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/move/${id}`);
  const data = await res.json();
  
  // Skip moves from later generations
  if (data.generation.name !== 'generation-i') {
    return null;
  }

  return {
    id: data.id,
    name: data.name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    type: data.type.name.charAt(0).toUpperCase() + data.type.name.slice(1),
    category: data.damage_class.name.charAt(0).toUpperCase() + data.damage_class.name.slice(1),
    power: data.power,
    accuracy: data.accuracy,
    pp: data.pp,
    effect: data.effect_entries.find(e => e.language.name === 'en')?.short_effect
      ?.replace('$effect_chance%', data.effect_chance ? `${data.effect_chance}%` : '')
  };
}

(async () => {
  const results = [];
  // We'll check the first 200 moves to make sure we get all Gen 1 moves
  for (let i = 1; i <= 200; ++i) {
    const move = await getMove(i);
    if (move) {
      results.push(move);
      console.log(`Fetched ${move.name}`);
    }
  }

  // Sort moves by ID
  results.sort((a, b) => a.id - b.id);

  const output = `export type Move = {
  id: number;
  name: string;
  type: string;
  category: 'Physical' | 'Special' | 'Status';
  power: number | null;
  accuracy: number | null;
  pp: number;
  effect?: string;
};

// Complete list of Gen 1 moves
export const gen1Moves: Move[] = ${JSON.stringify(results, null, 2)};\n`;

  fs.writeFileSync('moves.ts', output);
  console.log('Wrote data to moves.ts');
})();
