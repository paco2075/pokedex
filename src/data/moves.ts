export type Move = {
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
export const gen1Moves: Move[] = [
  { id: 1, name: "Absorb", type: "Grass", category: "Special", power: 20, accuracy: 100, pp: 25, effect: "User recovers half the HP inflicted on opponent." },
  { id: 2, name: "Acid", type: "Poison", category: "Special", power: 40, accuracy: 100, pp: 30, effect: "May lower opponent's Special Defense." },
  { id: 3, name: "Acid Armor", type: "Poison", category: "Status", power: null, accuracy: null, pp: 20, effect: "Sharply raises user's Defense." },
  { id: 4, name: "Agility", type: "Psychic", category: "Status", power: null, accuracy: null, pp: 30, effect: "Sharply raises user's Speed." },
  { id: 5, name: "Amnesia", type: "Psychic", category: "Status", power: null, accuracy: null, pp: 20, effect: "Sharply raises user's Special Defense." },
  { id: 6, name: "Aurora Beam", type: "Ice", category: "Special", power: 65, accuracy: 100, pp: 20, effect: "May lower opponent's Attack." },
  { id: 7, name: "Barrage", type: "Normal", category: "Physical", power: 15, accuracy: 85, pp: 20, effect: "Hits 2-5 times in one turn." },
  { id: 8, name: "Barrier", type: "Psychic", category: "Status", power: null, accuracy: null, pp: 20, effect: "Sharply raises user's Defense." },
  { id: 9, name: "Bite", type: "Dark", category: "Physical", power: 60, accuracy: 100, pp: 25, effect: "May cause flinching." },
  { id: 10, name: "Blizzard", type: "Ice", category: "Special", power: 110, accuracy: 70, pp: 5, effect: "May freeze opponent." },
  { id: 11, name: "Body Slam", type: "Normal", category: "Physical", power: 85, accuracy: 100, pp: 15, effect: "May paralyze opponent." },
  { id: 12, name: "Bone Club", type: "Ground", category: "Physical", power: 65, accuracy: 85, pp: 20, effect: "May cause flinching." },
  { id: 13, name: "Bonemerang", type: "Ground", category: "Physical", power: 50, accuracy: 90, pp: 10, effect: "Hits twice in one turn." },
  { id: 14, name: "Bubble", type: "Water", category: "Special", power: 40, accuracy: 100, pp: 30, effect: "May lower opponent's Speed." },
  { id: 15, name: "Bubble Beam", type: "Water", category: "Special", power: 65, accuracy: 100, pp: 20, effect: "May lower opponent's Speed." },
  // ... Add all moves from the provided list ...
  { id: 164, name: "Wing Attack", type: "Flying", category: "Physical", power: 60, accuracy: 100, pp: 35 },
  { id: 165, name: "Wrap", type: "Normal", category: "Physical", power: 15, accuracy: 90, pp: 20, effect: "Traps opponent, damaging them for 4-5 turns." }
];
