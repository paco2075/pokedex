// Gen 1 Pokémon type definition and data
export type PokemonStats = {
  hp: number;
  attack: number;
  defense: number;
  spAtk: number;
  spDef: number;
  speed: number;
};

export type Pokemon = {
  id: number;
  name: string;
  type: string[];
  stats?: PokemonStats;
  weaknesses?: string[];
  evolutions?: number[]; // IDs of evolutions
};

// Type color mapping for Gen 1 Pokémon
export const typeColors: Record<string, string> = {
  Normal: "bg-gray-300 text-gray-800",
  Fire: "bg-orange-400 text-white",
  Water: "bg-blue-400 text-white",
  Electric: "bg-yellow-300 text-yellow-900",
  Grass: "bg-green-400 text-white",
  Ice: "bg-cyan-400 text-cyan-900",
  Fighting: "bg-red-800 text-white",
  Poison: "bg-purple-600 text-white",
  Ground: "bg-yellow-600 text-white",
  Flying: "bg-indigo-300 text-indigo-900",
  Psychic: "bg-pink-400 text-white",
  Bug: "bg-lime-600 text-white",
  Rock: "bg-yellow-800 text-white",
  Ghost: "bg-violet-800 text-white",
  Dragon: "bg-indigo-700 text-white",
  Fairy: "bg-pink-200 text-pink-900",
};

export const gen1Pokemon = [
  {
    "id": 1,
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "stats": {
      "hp": 45,
      "attack": 49,
      "defense": 49,
      "spAtk": 65,
      "spDef": 65,
      "speed": 45
    },
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug",
      "Ground",
      "Psychic"
    ],
    "evolutions": [
      2
    ]
  },
  {
    "id": 2,
    "name": "Ivysaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 62,
      "defense": 63,
      "spAtk": 80,
      "spDef": 80,
      "speed": 60
    },
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug",
      "Ground",
      "Psychic"
    ],
    "evolutions": [
      3
    ]
  },
  {
    "id": 3,
    "name": "Venusaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 83,
      "spAtk": 100,
      "spDef": 100,
      "speed": 80
    },
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug",
      "Ground",
      "Psychic"
    ],
    "evolutions": []
  },
  {
    "id": 4,
    "name": "Charmander",
    "type": [
      "Fire"
    ],
    "stats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "spAtk": 60,
      "spDef": 50,
      "speed": 65
    },
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "evolutions": [
      5
    ]
  },
  {
    "id": 5,
    "name": "Charmeleon",
    "type": [
      "Fire"
    ],
    "stats": {
      "hp": 58,
      "attack": 64,
      "defense": 58,
      "spAtk": 80,
      "spDef": 65,
      "speed": 80
    },
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "evolutions": [
      6
    ]
  },
  {
    "id": 6,
    "name": "Charizard",
    "type": [
      "Fire",
      "Flying"
    ],
    "stats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "spAtk": 109,
      "spDef": 85,
      "speed": 100
    },
    "weaknesses": [
      "Water",
      "Ground",
      "Rock",
      "Electric",
      "Ice"
    ],
    "evolutions": []
  },
  {
    "id": 7,
    "name": "Squirtle",
    "type": [
      "Water"
    ],
    "stats": {
      "hp": 44,
      "attack": 48,
      "defense": 65,
      "spAtk": 50,
      "spDef": 64,
      "speed": 43
    },
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "evolutions": [
      8
    ]
  },
  {
    "id": 8,
    "name": "Wartortle",
    "type": [
      "Water"
    ],
    "stats": {
      "hp": 59,
      "attack": 63,
      "defense": 80,
      "spAtk": 65,
      "spDef": 80,
      "speed": 58
    },
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "evolutions": [
      9
    ]
  },
  {
    "id": 9,
    "name": "Blastoise",
    "type": [
      "Water"
    ],
    "stats": {
      "hp": 79,
      "attack": 83,
      "defense": 100,
      "spAtk": 85,
      "spDef": 105,
      "speed": 78
    },
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "evolutions": []
  },
  {
    "id": 10,
    "name": "Caterpie",
    "type": [
      "Bug"
    ],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 35,
      "spAtk": 20,
      "spDef": 20,
      "speed": 45
    },
    "weaknesses": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "evolutions": [
      11
    ]
  },
  {
    "id": 11,
    "name": "Metapod",
    "type": [
      "Bug"
    ],
    "stats": {
      "hp": 50,
      "attack": 20,
      "defense": 55,
      "spAtk": 25,
      "spDef": 25,
      "speed": 30
    },
    "weaknesses": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "evolutions": [
      12
    ]
  },
  {
    "id": 12,
    "name": "Butterfree",
    "type": [
      "Bug",
      "Flying"
    ],
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 50,
      "spAtk": 90,
      "spDef": 80,
      "speed": 70
    },
    "weaknesses": [
      "Fire",
      "Flying",
      "Rock",
      "Electric",
      "Ice"
    ],
    "evolutions": []
  },
  {
    "id": 13,
    "name": "Weedle",
    "type": [
      "Bug",
      "Poison"
    ],
    "stats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "spAtk": 20,
      "spDef": 20,
      "speed": 50
    },
    "weaknesses": [
      "Fire",
      "Flying",
      "Rock",
      "Ground",
      "Psychic"
    ],
    "evolutions": [
      14
    ]
  },
  {
    "id": 14,
    "name": "Kakuna",
    "type": [
      "Bug",
      "Poison"
    ],
    "stats": {
      "hp": 45,
      "attack": 25,
      "defense": 50,
      "spAtk": 25,
      "spDef": 25,
      "speed": 35
    },
    "weaknesses": [
      "Fire",
      "Flying",
      "Rock",
      "Ground",
      "Psychic"
    ],
    "evolutions": [
      15
    ]
  },
  {
    "id": 15,
    "name": "Beedrill",
    "type": [
      "Bug",
      "Poison"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 40,
      "spAtk": 45,
      "spDef": 80,
      "speed": 75
    },
    "weaknesses": [
      "Fire",
      "Flying",
      "Rock",
      "Ground",
      "Psychic"
    ],
    "evolutions": []
  },
  {
    "id": 16,
    "name": "Pidgey",
    "type": [
      "Normal",
      "Flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "spAtk": 35,
      "spDef": 35,
      "speed": 56
    },
    "weaknesses": [
      "Fighting",
      "Electric",
      "Ice",
      "Rock"
    ],
    "evolutions": [
      17
    ]
  },
  {
    "id": 17,
    "name": "Pidgeotto",
    "type": [
      "Normal",
      "Flying"
    ],
    "stats": {
      "hp": 63,
      "attack": 60,
      "defense": 55,
      "spAtk": 50,
      "spDef": 50,
      "speed": 71
    },
    "weaknesses": [
      "Fighting",
      "Electric",
      "Ice",
      "Rock"
    ],
    "evolutions": [
      18
    ]
  },
  {
    "id": 18,
    "name": "Pidgeot",
    "type": [
      "Normal",
      "Flying"
    ],
    "stats": {
      "hp": 83,
      "attack": 80,
      "defense": 75,
      "spAtk": 70,
      "spDef": 70,
      "speed": 101
    },
    "weaknesses": [
      "Fighting",
      "Electric",
      "Ice",
      "Rock"
    ],
    "evolutions": []
  },
  {
    "id": 19,
    "name": "Rattata",
    "type": [
      "Normal"
    ],
    "stats": {
      "hp": 30,
      "attack": 56,
      "defense": 35,
      "spAtk": 25,
      "spDef": 35,
      "speed": 72
    },
    "weaknesses": [
      "Fighting"
    ],
    "evolutions": [
      20
    ]
  },
  {
    "id": 20,
    "name": "Raticate",
    "type": [
      "Normal"
    ],
    "stats": {
      "hp": 55,
      "attack": 81,
      "defense": 60,
      "spAtk": 50,
      "spDef": 70,
      "speed": 97
    },
    "weaknesses": [
      "Fighting"
    ],
    "evolutions": []
  },
  {
    "id": 21,
    "name": "Spearow",
    "type": [
      "Normal",
      "Flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 60,
      "defense": 30,
      "spAtk": 31,
      "spDef": 31,
      "speed": 70
    },
    "weaknesses": [
      "Fighting",
      "Electric",
      "Ice",
      "Rock"
    ],
    "evolutions": [
      22
    ]
  },
  {
    "id": 22,
    "name": "Fearow",
    "type": [
      "Normal",
      "Flying"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 65,
      "spAtk": 61,
      "spDef": 61,
      "speed": 100
    },
    "weaknesses": [
      "Fighting",
      "Electric",
      "Ice",
      "Rock"
    ],
    "evolutions": []
  },
  {
    "id": 23,
    "name": "Ekans",
    "type": [
      "Poison"
    ],
    "stats": {
      "hp": 35,
      "attack": 60,
      "defense": 44,
      "spAtk": 40,
      "spDef": 54,
      "speed": 55
    },
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "evolutions": [
      24
    ]
  },
  {
    "id": 24,
    "name": "Arbok",
    "type": [
      "Poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 69,
      "spAtk": 65,
      "spDef": 79,
      "speed": 80
    },
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "evolutions": []
  },
  {
    "id": 25,
    "name": "Pikachu",
    "type": [
      "Electric"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "spAtk": 50,
      "spDef": 50,
      "speed": 90
    },
    "weaknesses": [
      "Ground"
    ],
    "evolutions": [
      26
    ]
  },
  {
    "id": 26,
    "name": "Raichu",
    "type": [
      "Electric"
    ],
    "stats": {
      "hp": 60,
      "attack": 90,
      "defense": 55,
      "spAtk": 90,
      "spDef": 80,
      "speed": 110
    },
    "weaknesses": [
      "Ground"
    ],
    "evolutions": []
  },
  {
    "id": 27,
    "name": "Sandshrew",
    "type": [
      "Ground"
    ],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 85,
      "spAtk": 20,
      "spDef": 30,
      "speed": 40
    },
    "weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "evolutions": [
      28
    ]
  },
  {
    "id": 28,
    "name": "Sandslash",
    "type": [
      "Ground"
    ],
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 110,
      "spAtk": 45,
      "spDef": 55,
      "speed": 65
    },
    "weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "evolutions": []
  },
  {
    "id": 29,
    "name": "Nidoran-f",
    "type": [
      "Poison"
    ],
    "stats": {
      "hp": 55,
      "attack": 47,
      "defense": 52,
      "spAtk": 40,
      "spDef": 40,
      "speed": 41
    },
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "evolutions": [
      30
    ]
  },
  {
    "id": 30,
    "name": "Nidorina",
    "type": [
      "Poison"
    ],
    "stats": {
      "hp": 70,
      "attack": 62,
      "defense": 67,
      "spAtk": 55,
      "spDef": 55,
      "speed": 56
    },
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "evolutions": [
      31
    ]
  },
  {
    "id": 31,
    "name": "Nidoqueen",
    "type": [
      "Poison",
      "Ground"
    ],
    "stats": {
      "hp": 90,
      "attack": 92,
      "defense": 87,
      "spAtk": 75,
      "spDef": 85,
      "speed": 76
    },
    "weaknesses": [
      "Ground",
      "Psychic",
      "Water",
      "Grass",
      "Ice"
    ],
    "evolutions": []
  },
  {
    "id": 32,
    "name": "Nidoran-m",
    "type": [
      "Poison"
    ],
    "stats": {
      "hp": 46,
      "attack": 57,
      "defense": 40,
      "spAtk": 40,
      "spDef": 40,
      "speed": 50
    },
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "evolutions": [
      33
    ]
  },
  {
    "id": 33,
    "name": "Nidorino",
    "type": [
      "Poison"
    ],
    "stats": {
      "hp": 61,
      "attack": 72,
      "defense": 57,
      "spAtk": 55,
      "spDef": 55,
      "speed": 65
    },
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "evolutions": [
      34
    ]
  },
  {
    "id": 34,
    "name": "Nidoking",
    "type": [
      "Poison",
      "Ground"
    ],
    "stats": {
      "hp": 81,
      "attack": 102,
      "defense": 77,
      "spAtk": 85,
      "spDef": 75,
      "speed": 85
    },
    "weaknesses": [
      "Ground",
      "Psychic",
      "Water",
      "Grass",
      "Ice"
    ],
    "evolutions": []
  },
  {
    "id": 35,
    "name": "Clefairy",
    "type": [
      "Fairy"
    ],
    "stats": {
      "hp": 70,
      "attack": 45,
      "defense": 48,
      "spAtk": 60,
      "spDef": 65,
      "speed": 35
    },
    "weaknesses": [
      "Poison",
      "Steel"
    ],
    "evolutions": [
      36
    ]
  },
  {
    "id": 36,
    "name": "Clefable",
    "type": [
      "Fairy"
    ],
    "stats": {
      "hp": 95,
      "attack": 70,
      "defense": 73,
      "spAtk": 95,
      "spDef": 90,
      "speed": 60
    },
    "weaknesses": [
      "Poison",
      "Steel"
    ],
    "evolutions": []
  },
  {
    "id": 37,
    "name": "Vulpix",
    "type": [
      "Fire"
    ],
    "stats": {
      "hp": 38,
      "attack": 41,
      "defense": 40,
      "spAtk": 50,
      "spDef": 65,
      "speed": 65
    },
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "evolutions": [
      38
    ]
  },
  {
    "id": 38,
    "name": "Ninetales",
    "type": [
      "Fire"
    ],
    "stats": {
      "hp": 73,
      "attack": 76,
      "defense": 75,
      "spAtk": 81,
      "spDef": 100,
      "speed": 100
    },
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "evolutions": []
  },
  {
    "id": 39,
    "name": "Jigglypuff",
    "type": [
      "Normal",
      "Fairy"
    ],
    "stats": {
      "hp": 115,
      "attack": 45,
      "defense": 20,
      "spAtk": 45,
      "spDef": 25,
      "speed": 20
    },
    "weaknesses": [
      "Fighting",
      "Poison",
      "Steel"
    ],
    "evolutions": [
      40
    ]
  },
  {
    "id": 40,
    "name": "Wigglytuff",
    "type": [
      "Normal",
      "Fairy"
    ],
    "stats": {
      "hp": 140,
      "attack": 70,
      "defense": 45,
      "spAtk": 85,
      "spDef": 50,
      "speed": 45
    },
    "weaknesses": [
      "Fighting",
      "Poison",
      "Steel"
    ],
    "evolutions": []
  },
  {
    "id": 41,
    "name": "Zubat",
    "type": [
      "Poison",
      "Flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "spAtk": 30,
      "spDef": 40,
      "speed": 55
    },
    "weaknesses": [
      "Ground",
      "Psychic",
      "Electric",
      "Ice",
      "Rock"
    ],
    "evolutions": [
      42
    ]
  },
  {
    "id": 42,
    "name": "Golbat",
    "type": [
      "Poison",
      "Flying"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 70,
      "spAtk": 65,
      "spDef": 75,
      "speed": 90
    },
    "weaknesses": [
      "Ground",
      "Psychic",
      "Electric",
      "Ice",
      "Rock"
    ],
    "evolutions": [
      169
    ]
  },
  {
    "id": 43,
    "name": "Oddish",
    "type": [
      "Grass",
      "Poison"
    ],
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 55,
      "spAtk": 75,
      "spDef": 65,
      "speed": 30
    },
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug",
      "Ground",
      "Psychic"
    ],
    "evolutions": [
      44
    ]
  },
  {
    "id": 44,
    "name": "Gloom",
    "type": [
      "Grass",
      "Poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 70,
      "spAtk": 85,
      "spDef": 75,
      "speed": 40
    },
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug",
      "Ground",
      "Psychic"
    ],
    "evolutions": [
      45,
      182
    ]
  },
  {
    "id": 45,
    "name": "Vileplume",
    "type": [
      "Grass",
      "Poison"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 85,
      "spAtk": 110,
      "spDef": 90,
      "speed": 50
    },
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug",
      "Ground",
      "Psychic"
    ],
    "evolutions": []
  },
  {
    "id": 46,
    "name": "Paras",
    "type": [
      "Bug",
      "Grass"
    ],
    "stats": {
      "hp": 35,
      "attack": 70,
      "defense": 55,
      "spAtk": 45,
      "spDef": 55,
      "speed": 25
    },
    "weaknesses": [
      "Fire",
      "Flying",
      "Rock",
      "Ice",
      "Poison",
      "Bug"
    ],
    "evolutions": [
      47
    ]
  },
  {
    "id": 47,
    "name": "Parasect",
    "type": [
      "Bug",
      "Grass"
    ],
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 80,
      "spAtk": 60,
      "spDef": 80,
      "speed": 30
    },
    "weaknesses": [
      "Fire",
      "Flying",
      "Rock",
      "Ice",
      "Poison",
      "Bug"
    ],
    "evolutions": []
  },
  {
    "id": 48,
    "name": "Venonat",
    "type": [
      "Bug",
      "Poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 55,
      "defense": 50,
      "spAtk": 40,
      "spDef": 55,
      "speed": 45
    },
    "weaknesses": [
      "Fire",
      "Flying",
      "Rock",
      "Ground",
      "Psychic"
    ],
    "evolutions": [
      49
    ]
  },
  {
    "id": 49,
    "name": "Venomoth",
    "type": [
      "Bug",
      "Poison"
    ],
    "stats": {
      "hp": 70,
      "attack": 65,
      "defense": 60,
      "spAtk": 90,
      "spDef": 75,
      "speed": 90
    },
    "weaknesses": [
      "Fire",
      "Flying",
      "Rock",
      "Ground",
      "Psychic"
    ],
    "evolutions": []
  },
  {
    "id": 50,
    "name": "Diglett",
    "type": [
      "Ground"
    ],
    "stats": {
      "hp": 10,
      "attack": 55,
      "defense": 25,
      "spAtk": 35,
      "spDef": 45,
      "speed": 95
    },
    "weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "evolutions": [
      51
    ]
  },
  {
    "id": 51,
    "name": "Dugtrio",
    "type": [
      "Ground"
    ],
    "stats": {
      "hp": 35,
      "attack": 100,
      "defense": 50,
      "spAtk": 50,
      "spDef": 70,
      "speed": 120
    },
    "weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "evolutions": []
  },
  {
    "id": 52,
    "name": "Meowth",
    "type": [
      "Normal"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "spAtk": 40,
      "spDef": 40,
      "speed": 90
    },
    "weaknesses": [
      "Fighting"
    ],
    "evolutions": [
      53,
      863
    ]
  },
  {
    "id": 53,
    "name": "Persian",
    "type": [
      "Normal"
    ],
    "stats": {
      "hp": 65,
      "attack": 70,
      "defense": 60,
      "spAtk": 65,
      "spDef": 65,
      "speed": 115
    },
    "weaknesses": [
      "Fighting"
    ],
    "evolutions": []
  },
  {
    "id": 54,
    "name": "Psyduck",
    "type": [
      "Water"
    ],
    "stats": {
      "hp": 50,
      "attack": 52,
      "defense": 48,
      "spAtk": 65,
      "spDef": 50,
      "speed": 55
    },
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "evolutions": [
      55
    ]
  },
  {
    "id": 55,
    "name": "Golduck",
    "type": [
      "Water"
    ],
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 78,
      "spAtk": 95,
      "spDef": 80,
      "speed": 85
    },
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "evolutions": []
  },
  {
    "id": 56,
    "name": "Mankey",
    "type": [
      "Fighting"
    ],
    "stats": {
      "hp": 40,
      "attack": 80,
      "defense": 35,
      "spAtk": 35,
      "spDef": 45,
      "speed": 70
    },
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "evolutions": [
      57
    ]
  },
  {
    "id": 57,
    "name": "Primeape",
    "type": [
      "Fighting"
    ],
    "stats": {
      "hp": 65,
      "attack": 105,
      "defense": 60,
      "spAtk": 60,
      "spDef": 70,
      "speed": 95
    },
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "evolutions": [
      979
    ]
  },
  {
    "id": 58,
    "name": "Growlithe",
    "type": [
      "Fire"
    ],
    "stats": {
      "hp": 55,
      "attack": 70,
      "defense": 45,
      "spAtk": 70,
      "spDef": 50,
      "speed": 60
    },
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "evolutions": [
      59
    ]
  },
  {
    "id": 59,
    "name": "Arcanine",
    "type": [
      "Fire"
    ],
    "stats": {
      "hp": 90,
      "attack": 110,
      "defense": 80,
      "spAtk": 100,
      "spDef": 80,
      "speed": 95
    },
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "evolutions": []
  },
  {
    "id": 60,
    "name": "Poliwag",
    "type": [
      "Water"
    ],
    "stats": {
      "hp": 40,
      "attack": 50,
      "defense": 40,
      "spAtk": 40,
      "spDef": 40,
      "speed": 90
    },
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "evolutions": [
      61
    ]
  },
  {
    "id": 61,
    "name": "Poliwhirl",
    "type": [
      "Water"
    ],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 65,
      "spAtk": 50,
      "spDef": 50,
      "speed": 90
    },
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "evolutions": [
      62,
      186
    ]
  },
  {
    "id": 62,
    "name": "Poliwrath",
    "type": [
      "Water",
      "Fighting"
    ],
    "stats": {
      "hp": 90,
      "attack": 95,
      "defense": 95,
      "spAtk": 70,
      "spDef": 90,
      "speed": 70
    },
    "weaknesses": [
      "Electric",
      "Grass",
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "evolutions": []
  },
  {
    "id": 63,
    "name": "Abra",
    "type": [
      "Psychic"
    ],
    "stats": {
      "hp": 25,
      "attack": 20,
      "defense": 15,
      "spAtk": 105,
      "spDef": 55,
      "speed": 90
    },
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "evolutions": [
      64
    ]
  },
  {
    "id": 64,
    "name": "Kadabra",
    "type": [
      "Psychic"
    ],
    "stats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "spAtk": 120,
      "spDef": 70,
      "speed": 105
    },
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "evolutions": [
      65
    ]
  },
  {
    "id": 65,
    "name": "Alakazam",
    "type": [
      "Psychic"
    ],
    "stats": {
      "hp": 55,
      "attack": 50,
      "defense": 45,
      "spAtk": 135,
      "spDef": 95,
      "speed": 120
    },
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "evolutions": []
  },
  {
    "id": 66,
    "name": "Machop",
    "type": [
      "Fighting"
    ],
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 50,
      "spAtk": 35,
      "spDef": 35,
      "speed": 35
    },
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "evolutions": [
      67
    ]
  },
  {
    "id": 67,
    "name": "Machoke",
    "type": [
      "Fighting"
    ],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 70,
      "spAtk": 50,
      "spDef": 60,
      "speed": 45
    },
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "evolutions": [
      68
    ]
  },
  {
    "id": 68,
    "name": "Machamp",
    "type": [
      "Fighting"
    ],
    "stats": {
      "hp": 90,
      "attack": 130,
      "defense": 80,
      "spAtk": 65,
      "spDef": 85,
      "speed": 55
    },
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "evolutions": []
  },
  {
    "id": 69,
    "name": "Bellsprout",
    "type": [
      "Grass",
      "Poison"
    ],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 35,
      "spAtk": 70,
      "spDef": 30,
      "speed": 40
    },
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug",
      "Ground",
      "Psychic"
    ],
    "evolutions": [
      70
    ]
  },
  {
    "id": 70,
    "name": "Weepinbell",
    "type": [
      "Grass",
      "Poison"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 50,
      "spAtk": 85,
      "spDef": 45,
      "speed": 55
    },
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug",
      "Ground",
      "Psychic"
    ],
    "evolutions": [
      71
    ]
  },
  {
    "id": 71,
    "name": "Victreebel",
    "type": [
      "Grass",
      "Poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "spAtk": 100,
      "spDef": 70,
      "speed": 70
    },
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug",
      "Ground",
      "Psychic"
    ],
    "evolutions": []
  },
  {
    "id": 72,
    "name": "Tentacool",
    "type": [
      "Water",
      "Poison"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 35,
      "spAtk": 50,
      "spDef": 100,
      "speed": 70
    },
    "weaknesses": [
      "Electric",
      "Grass",
      "Ground",
      "Psychic"
    ],
    "evolutions": [
      73
    ]
  },
  {
    "id": 73,
    "name": "Tentacruel",
    "type": [
      "Water",
      "Poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 70,
      "defense": 65,
      "spAtk": 80,
      "spDef": 120,
      "speed": 100
    },
    "weaknesses": [
      "Electric",
      "Grass",
      "Ground",
      "Psychic"
    ],
    "evolutions": []
  },
  {
    "id": 74,
    "name": "Geodude",
    "type": [
      "Rock",
      "Ground"
    ],
    "stats": {
      "hp": 40,
      "attack": 80,
      "defense": 100,
      "spAtk": 30,
      "spDef": 30,
      "speed": 20
    },
    "weaknesses": [
      "Water",
      "Grass",
      "Fighting",
      "Ground",
      "Steel",
      "Ice"
    ],
    "evolutions": [
      75
    ]
  },
  {
    "id": 75,
    "name": "Graveler",
    "type": [
      "Rock",
      "Ground"
    ],
    "stats": {
      "hp": 55,
      "attack": 95,
      "defense": 115,
      "spAtk": 45,
      "spDef": 45,
      "speed": 35
    },
    "weaknesses": [
      "Water",
      "Grass",
      "Fighting",
      "Ground",
      "Steel",
      "Ice"
    ],
    "evolutions": [
      76
    ]
  },
  {
    "id": 76,
    "name": "Golem",
    "type": [
      "Rock",
      "Ground"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 130,
      "spAtk": 55,
      "spDef": 65,
      "speed": 45
    },
    "weaknesses": [
      "Water",
      "Grass",
      "Fighting",
      "Ground",
      "Steel",
      "Ice"
    ],
    "evolutions": []
  },
  {
    "id": 77,
    "name": "Ponyta",
    "type": [
      "Fire"
    ],
    "stats": {
      "hp": 50,
      "attack": 85,
      "defense": 55,
      "spAtk": 65,
      "spDef": 65,
      "speed": 90
    },
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "evolutions": [
      78
    ]
  },
  {
    "id": 78,
    "name": "Rapidash",
    "type": [
      "Fire"
    ],
    "stats": {
      "hp": 65,
      "attack": 100,
      "defense": 70,
      "spAtk": 80,
      "spDef": 80,
      "speed": 105
    },
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "evolutions": []
  },
  {
    "id": 79,
    "name": "Slowpoke",
    "type": [
      "Water",
      "Psychic"
    ],
    "stats": {
      "hp": 90,
      "attack": 65,
      "defense": 65,
      "spAtk": 40,
      "spDef": 40,
      "speed": 15
    },
    "weaknesses": [
      "Electric",
      "Grass",
      "Bug",
      "Ghost",
      "Dark"
    ],
    "evolutions": [
      80,
      199
    ]
  },
  {
    "id": 80,
    "name": "Slowbro",
    "type": [
      "Water",
      "Psychic"
    ],
    "stats": {
      "hp": 95,
      "attack": 75,
      "defense": 110,
      "spAtk": 100,
      "spDef": 80,
      "speed": 30
    },
    "weaknesses": [
      "Electric",
      "Grass",
      "Bug",
      "Ghost",
      "Dark"
    ],
    "evolutions": []
  },
  {
    "id": 81,
    "name": "Magnemite",
    "type": [
      "Electric",
      "Steel"
    ],
    "stats": {
      "hp": 25,
      "attack": 35,
      "defense": 70,
      "spAtk": 95,
      "spDef": 55,
      "speed": 45
    },
    "weaknesses": [
      "Ground",
      "Fire",
      "Fighting"
    ],
    "evolutions": [
      82
    ]
  },
  {
    "id": 82,
    "name": "Magneton",
    "type": [
      "Electric",
      "Steel"
    ],
    "stats": {
      "hp": 50,
      "attack": 60,
      "defense": 95,
      "spAtk": 120,
      "spDef": 70,
      "speed": 70
    },
    "weaknesses": [
      "Ground",
      "Fire",
      "Fighting"
    ],
    "evolutions": [
      462
    ]
  },
  {
    "id": 83,
    "name": "Farfetchd",
    "type": [
      "Normal",
      "Flying"
    ],
    "stats": {
      "hp": 52,
      "attack": 90,
      "defense": 55,
      "spAtk": 58,
      "spDef": 62,
      "speed": 60
    },
    "weaknesses": [
      "Fighting",
      "Electric",
      "Ice",
      "Rock"
    ],
    "evolutions": [
      865
    ]
  },
  {
    "id": 84,
    "name": "Doduo",
    "type": [
      "Normal",
      "Flying"
    ],
    "stats": {
      "hp": 35,
      "attack": 85,
      "defense": 45,
      "spAtk": 35,
      "spDef": 35,
      "speed": 75
    },
    "weaknesses": [
      "Fighting",
      "Electric",
      "Ice",
      "Rock"
    ],
    "evolutions": [
      85
    ]
  },
  {
    "id": 85,
    "name": "Dodrio",
    "type": [
      "Normal",
      "Flying"
    ],
    "stats": {
      "hp": 60,
      "attack": 110,
      "defense": 70,
      "spAtk": 60,
      "spDef": 60,
      "speed": 110
    },
    "weaknesses": [
      "Fighting",
      "Electric",
      "Ice",
      "Rock"
    ],
    "evolutions": []
  },
  {
    "id": 86,
    "name": "Seel",
    "type": [
      "Water"
    ],
    "stats": {
      "hp": 65,
      "attack": 45,
      "defense": 55,
      "spAtk": 45,
      "spDef": 70,
      "speed": 45
    },
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "evolutions": [
      87
    ]
  },
  {
    "id": 87,
    "name": "Dewgong",
    "type": [
      "Water",
      "Ice"
    ],
    "stats": {
      "hp": 90,
      "attack": 70,
      "defense": 80,
      "spAtk": 70,
      "spDef": 95,
      "speed": 70
    },
    "weaknesses": [
      "Electric",
      "Grass",
      "Fire",
      "Fighting",
      "Rock",
      "Steel"
    ],
    "evolutions": []
  },
  {
    "id": 88,
    "name": "Grimer",
    "type": [
      "Poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 50,
      "spAtk": 40,
      "spDef": 50,
      "speed": 25
    },
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "evolutions": [
      89
    ]
  },
  {
    "id": 89,
    "name": "Muk",
    "type": [
      "Poison"
    ],
    "stats": {
      "hp": 105,
      "attack": 105,
      "defense": 75,
      "spAtk": 65,
      "spDef": 100,
      "speed": 50
    },
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "evolutions": []
  },
  {
    "id": 90,
    "name": "Shellder",
    "type": [
      "Water"
    ],
    "stats": {
      "hp": 30,
      "attack": 65,
      "defense": 100,
      "spAtk": 45,
      "spDef": 25,
      "speed": 40
    },
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "evolutions": [
      91
    ]
  },
  {
    "id": 91,
    "name": "Cloyster",
    "type": [
      "Water",
      "Ice"
    ],
    "stats": {
      "hp": 50,
      "attack": 95,
      "defense": 180,
      "spAtk": 85,
      "spDef": 45,
      "speed": 70
    },
    "weaknesses": [
      "Electric",
      "Grass",
      "Fire",
      "Fighting",
      "Rock",
      "Steel"
    ],
    "evolutions": []
  },
  {
    "id": 92,
    "name": "Gastly",
    "type": [
      "Ghost",
      "Poison"
    ],
    "stats": {
      "hp": 30,
      "attack": 35,
      "defense": 30,
      "spAtk": 100,
      "spDef": 35,
      "speed": 80
    },
    "weaknesses": [
      "Ghost",
      "Dark",
      "Ground",
      "Psychic"
    ],
    "evolutions": [
      93
    ]
  },
  {
    "id": 93,
    "name": "Haunter",
    "type": [
      "Ghost",
      "Poison"
    ],
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 45,
      "spAtk": 115,
      "spDef": 55,
      "speed": 95
    },
    "weaknesses": [
      "Ghost",
      "Dark",
      "Ground",
      "Psychic"
    ],
    "evolutions": [
      94
    ]
  },
  {
    "id": 94,
    "name": "Gengar",
    "type": [
      "Ghost",
      "Poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 60,
      "spAtk": 130,
      "spDef": 75,
      "speed": 110
    },
    "weaknesses": [
      "Ghost",
      "Dark",
      "Ground",
      "Psychic"
    ],
    "evolutions": []
  },
  {
    "id": 95,
    "name": "Onix",
    "type": [
      "Rock",
      "Ground"
    ],
    "stats": {
      "hp": 35,
      "attack": 45,
      "defense": 160,
      "spAtk": 30,
      "spDef": 45,
      "speed": 70
    },
    "weaknesses": [
      "Water",
      "Grass",
      "Fighting",
      "Ground",
      "Steel",
      "Ice"
    ],
    "evolutions": [
      208
    ]
  },
  {
    "id": 96,
    "name": "Drowzee",
    "type": [
      "Psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 48,
      "defense": 45,
      "spAtk": 43,
      "spDef": 90,
      "speed": 42
    },
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "evolutions": [
      97
    ]
  },
  {
    "id": 97,
    "name": "Hypno",
    "type": [
      "Psychic"
    ],
    "stats": {
      "hp": 85,
      "attack": 73,
      "defense": 70,
      "spAtk": 73,
      "spDef": 115,
      "speed": 67
    },
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "evolutions": []
  },
  {
    "id": 98,
    "name": "Krabby",
    "type": [
      "Water"
    ],
    "stats": {
      "hp": 30,
      "attack": 105,
      "defense": 90,
      "spAtk": 25,
      "spDef": 25,
      "speed": 50
    },
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "evolutions": [
      99
    ]
  },
  {
    "id": 99,
    "name": "Kingler",
    "type": [
      "Water"
    ],
    "stats": {
      "hp": 55,
      "attack": 130,
      "defense": 115,
      "spAtk": 50,
      "spDef": 50,
      "speed": 75
    },
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "evolutions": []
  },
  {
    "id": 100,
    "name": "Voltorb",
    "type": [
      "Electric"
    ],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 50,
      "spAtk": 55,
      "spDef": 55,
      "speed": 100
    },
    "weaknesses": [
      "Ground"
    ],
    "evolutions": [
      101
    ]
  },
  {
    "id": 101,
    "name": "Electrode",
    "type": [
      "Electric"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 70,
      "spAtk": 80,
      "spDef": 80,
      "speed": 150
    },
    "weaknesses": [
      "Ground"
    ],
    "evolutions": []
  },
  {
    "id": 102,
    "name": "Exeggcute",
    "type": [
      "Grass",
      "Psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 40,
      "defense": 80,
      "spAtk": 60,
      "spDef": 45,
      "speed": 40
    },
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug",
      "Ghost",
      "Dark"
    ],
    "evolutions": [
      103
    ]
  },
  {
    "id": 103,
    "name": "Exeggutor",
    "type": [
      "Grass",
      "Psychic"
    ],
    "stats": {
      "hp": 95,
      "attack": 95,
      "defense": 85,
      "spAtk": 125,
      "spDef": 75,
      "speed": 55
    },
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug",
      "Ghost",
      "Dark"
    ],
    "evolutions": []
  },
  {
    "id": 104,
    "name": "Cubone",
    "type": [
      "Ground"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 95,
      "spAtk": 40,
      "spDef": 50,
      "speed": 35
    },
    "weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "evolutions": [
      105
    ]
  },
  {
    "id": 105,
    "name": "Marowak",
    "type": [
      "Ground"
    ],
    "stats": {
      "hp": 60,
      "attack": 80,
      "defense": 110,
      "spAtk": 50,
      "spDef": 80,
      "speed": 45
    },
    "weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "evolutions": []
  },
  {
    "id": 106,
    "name": "Hitmonlee",
    "type": [
      "Fighting"
    ],
    "stats": {
      "hp": 50,
      "attack": 120,
      "defense": 53,
      "spAtk": 35,
      "spDef": 110,
      "speed": 87
    },
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "evolutions": []
  },
  {
    "id": 107,
    "name": "Hitmonchan",
    "type": [
      "Fighting"
    ],
    "stats": {
      "hp": 50,
      "attack": 105,
      "defense": 79,
      "spAtk": 35,
      "spDef": 110,
      "speed": 76
    },
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "evolutions": []
  },
  {
    "id": 108,
    "name": "Lickitung",
    "type": [
      "Normal"
    ],
    "stats": {
      "hp": 90,
      "attack": 55,
      "defense": 75,
      "spAtk": 60,
      "spDef": 75,
      "speed": 30
    },
    "weaknesses": [
      "Fighting"
    ],
    "evolutions": [
      463
    ]
  },
  {
    "id": 109,
    "name": "Koffing",
    "type": [
      "Poison"
    ],
    "stats": {
      "hp": 40,
      "attack": 65,
      "defense": 95,
      "spAtk": 60,
      "spDef": 45,
      "speed": 35
    },
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "evolutions": [
      110
    ]
  },
  {
    "id": 110,
    "name": "Weezing",
    "type": [
      "Poison"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 120,
      "spAtk": 85,
      "spDef": 70,
      "speed": 60
    },
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "evolutions": []
  },
  {
    "id": 111,
    "name": "Rhyhorn",
    "type": [
      "Ground",
      "Rock"
    ],
    "stats": {
      "hp": 80,
      "attack": 85,
      "defense": 95,
      "spAtk": 30,
      "spDef": 30,
      "speed": 25
    },
    "weaknesses": [
      "Water",
      "Grass",
      "Ice",
      "Fighting",
      "Ground",
      "Steel"
    ],
    "evolutions": [
      112
    ]
  },
  {
    "id": 112,
    "name": "Rhydon",
    "type": [
      "Ground",
      "Rock"
    ],
    "stats": {
      "hp": 105,
      "attack": 130,
      "defense": 120,
      "spAtk": 45,
      "spDef": 45,
      "speed": 40
    },
    "weaknesses": [
      "Water",
      "Grass",
      "Ice",
      "Fighting",
      "Ground",
      "Steel"
    ],
    "evolutions": [
      464
    ]
  },
  {
    "id": 113,
    "name": "Chansey",
    "type": [
      "Normal"
    ],
    "stats": {
      "hp": 250,
      "attack": 5,
      "defense": 5,
      "spAtk": 35,
      "spDef": 105,
      "speed": 50
    },
    "weaknesses": [
      "Fighting"
    ],
    "evolutions": [
      242
    ]
  },
  {
    "id": 114,
    "name": "Tangela",
    "type": [
      "Grass"
    ],
    "stats": {
      "hp": 65,
      "attack": 55,
      "defense": 115,
      "spAtk": 100,
      "spDef": 40,
      "speed": 60
    },
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug"
    ],
    "evolutions": [
      465
    ]
  },
  {
    "id": 115,
    "name": "Kangaskhan",
    "type": [
      "Normal"
    ],
    "stats": {
      "hp": 105,
      "attack": 95,
      "defense": 80,
      "spAtk": 40,
      "spDef": 80,
      "speed": 90
    },
    "weaknesses": [
      "Fighting"
    ],
    "evolutions": []
  },
  {
    "id": 116,
    "name": "Horsea",
    "type": [
      "Water"
    ],
    "stats": {
      "hp": 30,
      "attack": 40,
      "defense": 70,
      "spAtk": 70,
      "spDef": 25,
      "speed": 60
    },
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "evolutions": [
      117
    ]
  },
  {
    "id": 117,
    "name": "Seadra",
    "type": [
      "Water"
    ],
    "stats": {
      "hp": 55,
      "attack": 65,
      "defense": 95,
      "spAtk": 95,
      "spDef": 45,
      "speed": 85
    },
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "evolutions": [
      230
    ]
  },
  {
    "id": 118,
    "name": "Goldeen",
    "type": [
      "Water"
    ],
    "stats": {
      "hp": 45,
      "attack": 67,
      "defense": 60,
      "spAtk": 35,
      "spDef": 50,
      "speed": 63
    },
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "evolutions": [
      119
    ]
  },
  {
    "id": 119,
    "name": "Seaking",
    "type": [
      "Water"
    ],
    "stats": {
      "hp": 80,
      "attack": 92,
      "defense": 65,
      "spAtk": 65,
      "spDef": 80,
      "speed": 68
    },
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "evolutions": []
  },
  {
    "id": 120,
    "name": "Staryu",
    "type": [
      "Water"
    ],
    "stats": {
      "hp": 30,
      "attack": 45,
      "defense": 55,
      "spAtk": 70,
      "spDef": 55,
      "speed": 85
    },
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "evolutions": [
      121
    ]
  },
  {
    "id": 121,
    "name": "Starmie",
    "type": [
      "Water",
      "Psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 75,
      "defense": 85,
      "spAtk": 100,
      "spDef": 85,
      "speed": 115
    },
    "weaknesses": [
      "Electric",
      "Grass",
      "Bug",
      "Ghost",
      "Dark"
    ],
    "evolutions": []
  },
  {
    "id": 122,
    "name": "Mr-mime",
    "type": [
      "Psychic",
      "Fairy"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 65,
      "spAtk": 100,
      "spDef": 120,
      "speed": 90
    },
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark",
      "Poison",
      "Steel"
    ],
    "evolutions": [
      866
    ]
  },
  {
    "id": 123,
    "name": "Scyther",
    "type": [
      "Bug",
      "Flying"
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 80,
      "spAtk": 55,
      "spDef": 80,
      "speed": 105
    },
    "weaknesses": [
      "Fire",
      "Flying",
      "Rock",
      "Electric",
      "Ice"
    ],
    "evolutions": [
      212,
      900
    ]
  },
  {
    "id": 124,
    "name": "Jynx",
    "type": [
      "Ice",
      "Psychic"
    ],
    "stats": {
      "hp": 65,
      "attack": 50,
      "defense": 35,
      "spAtk": 115,
      "spDef": 95,
      "speed": 95
    },
    "weaknesses": [
      "Fire",
      "Fighting",
      "Rock",
      "Steel",
      "Bug",
      "Ghost",
      "Dark"
    ],
    "evolutions": []
  },
  {
    "id": 125,
    "name": "Electabuzz",
    "type": [
      "Electric"
    ],
    "stats": {
      "hp": 65,
      "attack": 83,
      "defense": 57,
      "spAtk": 95,
      "spDef": 85,
      "speed": 105
    },
    "weaknesses": [
      "Ground"
    ],
    "evolutions": [
      466
    ]
  },
  {
    "id": 126,
    "name": "Magmar",
    "type": [
      "Fire"
    ],
    "stats": {
      "hp": 65,
      "attack": 95,
      "defense": 57,
      "spAtk": 100,
      "spDef": 85,
      "speed": 93
    },
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "evolutions": [
      467
    ]
  },
  {
    "id": 127,
    "name": "Pinsir",
    "type": [
      "Bug"
    ],
    "stats": {
      "hp": 65,
      "attack": 125,
      "defense": 100,
      "spAtk": 55,
      "spDef": 70,
      "speed": 85
    },
    "weaknesses": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "evolutions": []
  },
  {
    "id": 128,
    "name": "Tauros",
    "type": [
      "Normal"
    ],
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 95,
      "spAtk": 40,
      "spDef": 70,
      "speed": 110
    },
    "weaknesses": [
      "Fighting"
    ],
    "evolutions": []
  },
  {
    "id": 129,
    "name": "Magikarp",
    "type": [
      "Water"
    ],
    "stats": {
      "hp": 20,
      "attack": 10,
      "defense": 55,
      "spAtk": 15,
      "spDef": 20,
      "speed": 80
    },
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "evolutions": [
      130
    ]
  },
  {
    "id": 130,
    "name": "Gyarados",
    "type": [
      "Water",
      "Flying"
    ],
    "stats": {
      "hp": 95,
      "attack": 125,
      "defense": 79,
      "spAtk": 60,
      "spDef": 100,
      "speed": 81
    },
    "weaknesses": [
      "Electric",
      "Grass",
      "Ice",
      "Rock"
    ],
    "evolutions": []
  },
  {
    "id": 131,
    "name": "Lapras",
    "type": [
      "Water",
      "Ice"
    ],
    "stats": {
      "hp": 130,
      "attack": 85,
      "defense": 80,
      "spAtk": 85,
      "spDef": 95,
      "speed": 60
    },
    "weaknesses": [
      "Electric",
      "Grass",
      "Fire",
      "Fighting",
      "Rock",
      "Steel"
    ],
    "evolutions": []
  },
  {
    "id": 132,
    "name": "Ditto",
    "type": [
      "Normal"
    ],
    "stats": {
      "hp": 48,
      "attack": 48,
      "defense": 48,
      "spAtk": 48,
      "spDef": 48,
      "speed": 48
    },
    "weaknesses": [
      "Fighting"
    ],
    "evolutions": []
  },
  {
    "id": 133,
    "name": "Eevee",
    "type": [
      "Normal"
    ],
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 50,
      "spAtk": 45,
      "spDef": 65,
      "speed": 55
    },
    "weaknesses": [
      "Fighting"
    ],
    "evolutions": [
      134,
      135,
      136,
      196,
      197,
      470,
      471,
      700
    ]
  },
  {
    "id": 134,
    "name": "Vaporeon",
    "type": [
      "Water"
    ],
    "stats": {
      "hp": 130,
      "attack": 65,
      "defense": 60,
      "spAtk": 110,
      "spDef": 95,
      "speed": 65
    },
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "evolutions": []
  },
  {
    "id": 135,
    "name": "Jolteon",
    "type": [
      "Electric"
    ],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "spAtk": 110,
      "spDef": 95,
      "speed": 130
    },
    "weaknesses": [
      "Ground"
    ],
    "evolutions": []
  },
  {
    "id": 136,
    "name": "Flareon",
    "type": [
      "Fire"
    ],
    "stats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "spAtk": 95,
      "spDef": 110,
      "speed": 65
    },
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "evolutions": []
  },
  {
    "id": 137,
    "name": "Porygon",
    "type": [
      "Normal"
    ],
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 70,
      "spAtk": 85,
      "spDef": 75,
      "speed": 40
    },
    "weaknesses": [
      "Fighting"
    ],
    "evolutions": [
      233
    ]
  },
  {
    "id": 138,
    "name": "Omanyte",
    "type": [
      "Rock",
      "Water"
    ],
    "stats": {
      "hp": 35,
      "attack": 40,
      "defense": 100,
      "spAtk": 90,
      "spDef": 55,
      "speed": 35
    },
    "weaknesses": [
      "Water",
      "Grass",
      "Fighting",
      "Ground",
      "Steel",
      "Electric"
    ],
    "evolutions": [
      139
    ]
  },
  {
    "id": 139,
    "name": "Omastar",
    "type": [
      "Rock",
      "Water"
    ],
    "stats": {
      "hp": 70,
      "attack": 60,
      "defense": 125,
      "spAtk": 115,
      "spDef": 70,
      "speed": 55
    },
    "weaknesses": [
      "Water",
      "Grass",
      "Fighting",
      "Ground",
      "Steel",
      "Electric"
    ],
    "evolutions": []
  },
  {
    "id": 140,
    "name": "Kabuto",
    "type": [
      "Rock",
      "Water"
    ],
    "stats": {
      "hp": 30,
      "attack": 80,
      "defense": 90,
      "spAtk": 55,
      "spDef": 45,
      "speed": 55
    },
    "weaknesses": [
      "Water",
      "Grass",
      "Fighting",
      "Ground",
      "Steel",
      "Electric"
    ],
    "evolutions": [
      141
    ]
  },
  {
    "id": 141,
    "name": "Kabutops",
    "type": [
      "Rock",
      "Water"
    ],
    "stats": {
      "hp": 60,
      "attack": 115,
      "defense": 105,
      "spAtk": 65,
      "spDef": 70,
      "speed": 80
    },
    "weaknesses": [
      "Water",
      "Grass",
      "Fighting",
      "Ground",
      "Steel",
      "Electric"
    ],
    "evolutions": []
  },
  {
    "id": 142,
    "name": "Aerodactyl",
    "type": [
      "Rock",
      "Flying"
    ],
    "stats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "spAtk": 60,
      "spDef": 75,
      "speed": 130
    },
    "weaknesses": [
      "Water",
      "Grass",
      "Fighting",
      "Ground",
      "Steel",
      "Electric",
      "Ice",
      "Rock"
    ],
    "evolutions": []
  },
  {
    "id": 143,
    "name": "Snorlax",
    "type": [
      "Normal"
    ],
    "stats": {
      "hp": 160,
      "attack": 110,
      "defense": 65,
      "spAtk": 65,
      "spDef": 110,
      "speed": 30
    },
    "weaknesses": [
      "Fighting"
    ],
    "evolutions": []
  },
  {
    "id": 144,
    "name": "Articuno",
    "type": [
      "Ice",
      "Flying"
    ],
    "stats": {
      "hp": 90,
      "attack": 85,
      "defense": 100,
      "spAtk": 95,
      "spDef": 125,
      "speed": 85
    },
    "weaknesses": [
      "Fire",
      "Fighting",
      "Rock",
      "Steel",
      "Electric",
      "Ice"
    ],
    "evolutions": []
  },
  {
    "id": 145,
    "name": "Zapdos",
    "type": [
      "Electric",
      "Flying"
    ],
    "stats": {
      "hp": 90,
      "attack": 90,
      "defense": 85,
      "spAtk": 125,
      "spDef": 90,
      "speed": 100
    },
    "weaknesses": [
      "Ground",
      "Electric",
      "Ice",
      "Rock"
    ],
    "evolutions": []
  },
  {
    "id": 146,
    "name": "Moltres",
    "type": [
      "Fire",
      "Flying"
    ],
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 90,
      "spAtk": 125,
      "spDef": 85,
      "speed": 90
    },
    "weaknesses": [
      "Water",
      "Ground",
      "Rock",
      "Electric",
      "Ice"
    ],
    "evolutions": []
  },
  {
    "id": 147,
    "name": "Dratini",
    "type": [
      "Dragon"
    ],
    "stats": {
      "hp": 41,
      "attack": 64,
      "defense": 45,
      "spAtk": 50,
      "spDef": 50,
      "speed": 50
    },
    "weaknesses": [
      "Ice",
      "Dragon",
      "Fairy"
    ],
    "evolutions": [
      148
    ]
  },
  {
    "id": 148,
    "name": "Dragonair",
    "type": [
      "Dragon"
    ],
    "stats": {
      "hp": 61,
      "attack": 84,
      "defense": 65,
      "spAtk": 70,
      "spDef": 70,
      "speed": 70
    },
    "weaknesses": [
      "Ice",
      "Dragon",
      "Fairy"
    ],
    "evolutions": [
      149
    ]
  },
  {
    "id": 149,
    "name": "Dragonite",
    "type": [
      "Dragon",
      "Flying"
    ],
    "stats": {
      "hp": 91,
      "attack": 134,
      "defense": 95,
      "spAtk": 100,
      "spDef": 100,
      "speed": 80
    },
    "weaknesses": [
      "Ice",
      "Dragon",
      "Fairy",
      "Electric",
      "Rock"
    ],
    "evolutions": []
  },
  {
    "id": 150,
    "name": "Mewtwo",
    "type": [
      "Psychic"
    ],
    "stats": {
      "hp": 106,
      "attack": 110,
      "defense": 90,
      "spAtk": 154,
      "spDef": 90,
      "speed": 130
    },
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "evolutions": []
  },
  {
    "id": 151,
    "name": "Mew",
    "type": [
      "Psychic"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "spAtk": 100,
      "spDef": 100,
      "speed": 100
    },
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "evolutions": []
  }
];