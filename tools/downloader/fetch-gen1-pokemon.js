// fetch-gen1-pokemon.js
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const fs = require('fs');

const TYPE_CHART = {
  normal:    { weak: ["fighting"] },
  fire:      { weak: ["water", "ground", "rock"] },
  water:     { weak: ["electric", "grass"] },
  electric:  { weak: ["ground"] },
  grass:     { weak: ["fire", "ice", "poison", "flying", "bug"] },
  ice:       { weak: ["fire", "fighting", "rock", "steel"] },
  fighting:  { weak: ["flying", "psychic", "fairy"] },
  poison:    { weak: ["ground", "psychic"] },
  ground:    { weak: ["water", "grass", "ice"] },
  flying:    { weak: ["electric", "ice", "rock"] },
  psychic:   { weak: ["bug", "ghost", "dark"] },
  bug:       { weak: ["fire", "flying", "rock"] },
  rock:      { weak: ["water", "grass", "fighting", "ground", "steel"] },
  ghost:     { weak: ["ghost", "dark"] },
  dragon:    { weak: ["ice", "dragon", "fairy"] },
  dark:      { weak: ["fighting", "bug", "fairy"] },
  steel:     { weak: ["fire", "fighting", "ground"] },
  fairy:     { weak: ["poison", "steel"] },
};

async function getPokemon(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  const speciesRes = await fetch(data.species.url);
  const species = await speciesRes.json();

  // Get evolutions
  let evolutions = [];
  if (species.evolution_chain) {
    const evoRes = await fetch(species.evolution_chain.url);
    const evoData = await evoRes.json();
    function findEvos(chain, target) {
      if (chain.species.name === target) {
        return (chain.evolves_to || []).map(e => e.species.url.match(/\/(\d+)\/$/)[1]);
      }
      for (const evo of chain.evolves_to || []) {
        const found = findEvos(evo, target);
        if (found.length) return found;
      }
      return [];
    }
    evolutions = findEvos(evoData.chain, data.name).map(Number);
  }

  // Get weaknesses
  let weaknesses = [];
  for (const t of data.types) {
    const type = t.type.name;
    if (TYPE_CHART[type]) {
      weaknesses = weaknesses.concat(TYPE_CHART[type].weak);
    }
  }
  weaknesses = [...new Set(weaknesses.map(w => w.charAt(0).toUpperCase() + w.slice(1)))];

  // Get stats
  const stats = {};
  data.stats.forEach(s => {
    if (s.stat.name === "hp") stats.hp = s.base_stat;
    if (s.stat.name === "attack") stats.attack = s.base_stat;
    if (s.stat.name === "defense") stats.defense = s.base_stat;
    if (s.stat.name === "special-attack") stats.spAtk = s.base_stat;
    if (s.stat.name === "special-defense") stats.spDef = s.base_stat;
    if (s.stat.name === "speed") stats.speed = s.base_stat;
  });

  return {
    id: data.id,
    name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
    type: data.types.map(t => t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)),
    stats,
    weaknesses,
    evolutions,
  };
}

(async () => {
  const results = [];
  for (let i = 1; i <= 151; ++i) {
    const p = await getPokemon(i);
    results.push(p);
    console.log(`Fetched ${p.name}`);
  }
  const output = `export const gen1Pokemon = ${JSON.stringify(results, null, 2)};\n`;
  fs.writeFileSync('pokemon.ts', output);
  console.log('Wrote data to pokemon.ts');
})();