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
  {
    "id": 1,
    "name": "Pound",
    "type": "Normal",
    "category": "Physical",
    "power": 40,
    "accuracy": 100,
    "pp": 35,
    "effect": "Inflicts regular damage with no additional effect."
  },
  {
    "id": 2,
    "name": "Karate Chop",
    "type": "Fighting",
    "category": "Physical",
    "power": 50,
    "accuracy": 100,
    "pp": 25,
    "effect": "Has an increased chance for a critical hit."
  },
  {
    "id": 3,
    "name": "Double Slap",
    "type": "Normal",
    "category": "Physical",
    "power": 15,
    "accuracy": 85,
    "pp": 10,
    "effect": "Hits 2-5 times in one turn."
  },
  {
    "id": 4,
    "name": "Comet Punch",
    "type": "Normal",
    "category": "Physical",
    "power": 18,
    "accuracy": 85,
    "pp": 15,
    "effect": "Hits 2-5 times in one turn."
  },
  {
    "id": 5,
    "name": "Mega Punch",
    "type": "Normal",
    "category": "Physical",
    "power": 80,
    "accuracy": 85,
    "pp": 20,
    "effect": "Inflicts regular damage with no additional effect."
  },
  {
    "id": 6,
    "name": "Pay Day",
    "type": "Normal",
    "category": "Physical",
    "power": 40,
    "accuracy": 100,
    "pp": 20,
    "effect": "Scatters money on the ground worth five times the user's level."
  },
  {
    "id": 7,
    "name": "Fire Punch",
    "type": "Fire",
    "category": "Physical",
    "power": 75,
    "accuracy": 100,
    "pp": 15,
    "effect": "Has a 10% chance to burn the target."
  },
  {
    "id": 8,
    "name": "Ice Punch",
    "type": "Ice",
    "category": "Physical",
    "power": 75,
    "accuracy": 100,
    "pp": 15,
    "effect": "Has a 10% chance to freeze the target."
  },
  {
    "id": 9,
    "name": "Thunder Punch",
    "type": "Electric",
    "category": "Physical",
    "power": 75,
    "accuracy": 100,
    "pp": 15,
    "effect": "Has a 10% chance to paralyze the target."
  },
  {
    "id": 10,
    "name": "Scratch",
    "type": "Normal",
    "category": "Physical",
    "power": 40,
    "accuracy": 100,
    "pp": 35,
    "effect": "Inflicts regular damage with no additional effect."
  },
  {
    "id": 11,
    "name": "Vice Grip",
    "type": "Normal",
    "category": "Physical",
    "power": 55,
    "accuracy": 100,
    "pp": 30,
    "effect": "Inflicts regular damage with no additional effect."
  },
  {
    "id": 12,
    "name": "Guillotine",
    "type": "Normal",
    "category": "Physical",
    "power": null,
    "accuracy": 30,
    "pp": 5,
    "effect": "Causes a one-hit KO."
  },
  {
    "id": 13,
    "name": "Razor Wind",
    "type": "Normal",
    "category": "Special",
    "power": 80,
    "accuracy": 100,
    "pp": 10,
    "effect": "Requires a turn to charge before attacking."
  },
  {
    "id": 14,
    "name": "Swords Dance",
    "type": "Normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "effect": "Raises the user's Attack by two stages."
  },
  {
    "id": 15,
    "name": "Cut",
    "type": "Normal",
    "category": "Physical",
    "power": 50,
    "accuracy": 95,
    "pp": 30,
    "effect": "Inflicts regular damage with no additional effect."
  },
  {
    "id": 16,
    "name": "Gust",
    "type": "Flying",
    "category": "Special",
    "power": 40,
    "accuracy": 100,
    "pp": 35,
    "effect": "Inflicts regular damage and can hit Pokémon in the air."
  },
  {
    "id": 17,
    "name": "Wing Attack",
    "type": "Flying",
    "category": "Physical",
    "power": 60,
    "accuracy": 100,
    "pp": 35,
    "effect": "Inflicts regular damage with no additional effect."
  },
  {
    "id": 18,
    "name": "Whirlwind",
    "type": "Normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "effect": "Immediately ends wild battles.  Forces trainers to switch Pokémon."
  },
  {
    "id": 19,
    "name": "Fly",
    "type": "Flying",
    "category": "Physical",
    "power": 90,
    "accuracy": 95,
    "pp": 15,
    "effect": "User flies high into the air, dodging all attacks, and hits next turn."
  },
  {
    "id": 20,
    "name": "Bind",
    "type": "Normal",
    "category": "Physical",
    "power": 15,
    "accuracy": 85,
    "pp": 20,
    "effect": "Prevents the target from fleeing and inflicts damage for 2-5 turns."
  },
  {
    "id": 21,
    "name": "Slam",
    "type": "Normal",
    "category": "Physical",
    "power": 80,
    "accuracy": 75,
    "pp": 20,
    "effect": "Inflicts regular damage with no additional effect."
  },
  {
    "id": 22,
    "name": "Vine Whip",
    "type": "Grass",
    "category": "Physical",
    "power": 45,
    "accuracy": 100,
    "pp": 25,
    "effect": "Inflicts regular damage with no additional effect."
  },
  {
    "id": 23,
    "name": "Stomp",
    "type": "Normal",
    "category": "Physical",
    "power": 65,
    "accuracy": 100,
    "pp": 20,
    "effect": "Has a 30% chance to make the target flinch."
  },
  {
    "id": 24,
    "name": "Double Kick",
    "type": "Fighting",
    "category": "Physical",
    "power": 30,
    "accuracy": 100,
    "pp": 30,
    "effect": "Hits twice in one turn."
  },
  {
    "id": 25,
    "name": "Mega Kick",
    "type": "Normal",
    "category": "Physical",
    "power": 120,
    "accuracy": 75,
    "pp": 5,
    "effect": "Inflicts regular damage with no additional effect."
  },
  {
    "id": 26,
    "name": "Jump Kick",
    "type": "Fighting",
    "category": "Physical",
    "power": 100,
    "accuracy": 95,
    "pp": 10,
    "effect": "If the user misses, it takes half the damage it would have inflicted in recoil."
  },
  {
    "id": 27,
    "name": "Rolling Kick",
    "type": "Fighting",
    "category": "Physical",
    "power": 60,
    "accuracy": 85,
    "pp": 15,
    "effect": "Has a 30% chance to make the target flinch."
  },
  {
    "id": 28,
    "name": "Sand Attack",
    "type": "Ground",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 15,
    "effect": "Lowers the target's accuracy by one stage."
  },
  {
    "id": 29,
    "name": "Headbutt",
    "type": "Normal",
    "category": "Physical",
    "power": 70,
    "accuracy": 100,
    "pp": 15,
    "effect": "Has a 30% chance to make the target flinch."
  },
  {
    "id": 30,
    "name": "Horn Attack",
    "type": "Normal",
    "category": "Physical",
    "power": 65,
    "accuracy": 100,
    "pp": 25,
    "effect": "Inflicts regular damage with no additional effect."
  },
  {
    "id": 31,
    "name": "Fury Attack",
    "type": "Normal",
    "category": "Physical",
    "power": 15,
    "accuracy": 85,
    "pp": 20,
    "effect": "Hits 2-5 times in one turn."
  },
  {
    "id": 32,
    "name": "Horn Drill",
    "type": "Normal",
    "category": "Physical",
    "power": null,
    "accuracy": 30,
    "pp": 5,
    "effect": "Causes a one-hit KO."
  },
  {
    "id": 33,
    "name": "Tackle",
    "type": "Normal",
    "category": "Physical",
    "power": 40,
    "accuracy": 100,
    "pp": 35,
    "effect": "Inflicts regular damage with no additional effect."
  },
  {
    "id": 34,
    "name": "Body Slam",
    "type": "Normal",
    "category": "Physical",
    "power": 85,
    "accuracy": 100,
    "pp": 15,
    "effect": "Has a 30% chance to paralyze the target."
  },
  {
    "id": 35,
    "name": "Wrap",
    "type": "Normal",
    "category": "Physical",
    "power": 15,
    "accuracy": 90,
    "pp": 20,
    "effect": "Prevents the target from fleeing and inflicts damage for 2-5 turns."
  },
  {
    "id": 36,
    "name": "Take Down",
    "type": "Normal",
    "category": "Physical",
    "power": 90,
    "accuracy": 85,
    "pp": 20,
    "effect": "User receives 1/4 the damage it inflicts in recoil."
  },
  {
    "id": 37,
    "name": "Thrash",
    "type": "Normal",
    "category": "Physical",
    "power": 120,
    "accuracy": 100,
    "pp": 10,
    "effect": "Hits every turn for 2-3 turns, then confuses the user."
  },
  {
    "id": 38,
    "name": "Double Edge",
    "type": "Normal",
    "category": "Physical",
    "power": 120,
    "accuracy": 100,
    "pp": 15,
    "effect": "User receives 1/3 the damage inflicted in recoil."
  },
  {
    "id": 39,
    "name": "Tail Whip",
    "type": "Normal",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 30,
    "effect": "Lowers the target's Defense by one stage."
  },
  {
    "id": 40,
    "name": "Poison Sting",
    "type": "Poison",
    "category": "Physical",
    "power": 15,
    "accuracy": 100,
    "pp": 35,
    "effect": "Has a 30% chance to poison the target."
  },
  {
    "id": 41,
    "name": "Twineedle",
    "type": "Bug",
    "category": "Physical",
    "power": 25,
    "accuracy": 100,
    "pp": 20,
    "effect": "Hits twice in the same turn.  Has a 20% chance to poison the target."
  },
  {
    "id": 42,
    "name": "Pin Missile",
    "type": "Bug",
    "category": "Physical",
    "power": 25,
    "accuracy": 95,
    "pp": 20,
    "effect": "Hits 2-5 times in one turn."
  },
  {
    "id": 43,
    "name": "Leer",
    "type": "Normal",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 30,
    "effect": "Lowers the target's Defense by one stage."
  },
  {
    "id": 44,
    "name": "Bite",
    "type": "Dark",
    "category": "Physical",
    "power": 60,
    "accuracy": 100,
    "pp": 25,
    "effect": "Has a 30% chance to make the target flinch."
  },
  {
    "id": 45,
    "name": "Growl",
    "type": "Normal",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 40,
    "effect": "Lowers the target's Attack by one stage."
  },
  {
    "id": 46,
    "name": "Roar",
    "type": "Normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "effect": "Immediately ends wild battles.  Forces trainers to switch Pokémon."
  },
  {
    "id": 47,
    "name": "Sing",
    "type": "Normal",
    "category": "Status",
    "power": null,
    "accuracy": 55,
    "pp": 15,
    "effect": "Puts the target to sleep."
  },
  {
    "id": 48,
    "name": "Supersonic",
    "type": "Normal",
    "category": "Status",
    "power": null,
    "accuracy": 55,
    "pp": 20,
    "effect": "Confuses the target."
  },
  {
    "id": 49,
    "name": "Sonic Boom",
    "type": "Normal",
    "category": "Special",
    "power": null,
    "accuracy": 90,
    "pp": 20,
    "effect": "Inflicts 20 points of damage."
  },
  {
    "id": 50,
    "name": "Disable",
    "type": "Normal",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 20,
    "effect": "Disables the target's last used move for 1-8 turns."
  },
  {
    "id": 51,
    "name": "Acid",
    "type": "Poison",
    "category": "Special",
    "power": 40,
    "accuracy": 100,
    "pp": 30,
    "effect": "Has a 10% chance to lower the target's Special Defense by one stage."
  },
  {
    "id": 52,
    "name": "Ember",
    "type": "Fire",
    "category": "Special",
    "power": 40,
    "accuracy": 100,
    "pp": 25,
    "effect": "Has a 10% chance to burn the target."
  },
  {
    "id": 53,
    "name": "Flamethrower",
    "type": "Fire",
    "category": "Special",
    "power": 90,
    "accuracy": 100,
    "pp": 15,
    "effect": "Has a 10% chance to burn the target."
  },
  {
    "id": 54,
    "name": "Mist",
    "type": "Ice",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 30,
    "effect": "Protects the user's stats from being changed by enemy moves."
  },
  {
    "id": 55,
    "name": "Water Gun",
    "type": "Water",
    "category": "Special",
    "power": 40,
    "accuracy": 100,
    "pp": 25,
    "effect": "Inflicts regular damage with no additional effect."
  },
  {
    "id": 56,
    "name": "Hydro Pump",
    "type": "Water",
    "category": "Special",
    "power": 110,
    "accuracy": 80,
    "pp": 5,
    "effect": "Inflicts regular damage with no additional effect."
  },
  {
    "id": 57,
    "name": "Surf",
    "type": "Water",
    "category": "Special",
    "power": 90,
    "accuracy": 100,
    "pp": 15,
    "effect": "Inflicts regular damage and can hit Dive users."
  },
  {
    "id": 58,
    "name": "Ice Beam",
    "type": "Ice",
    "category": "Special",
    "power": 90,
    "accuracy": 100,
    "pp": 10,
    "effect": "Has a 10% chance to freeze the target."
  },
  {
    "id": 59,
    "name": "Blizzard",
    "type": "Ice",
    "category": "Special",
    "power": 110,
    "accuracy": 70,
    "pp": 5,
    "effect": "Has a 10% chance to freeze the target."
  },
  {
    "id": 60,
    "name": "Psybeam",
    "type": "Psychic",
    "category": "Special",
    "power": 65,
    "accuracy": 100,
    "pp": 20,
    "effect": "Has a 10% chance to confuse the target."
  },
  {
    "id": 61,
    "name": "Bubble Beam",
    "type": "Water",
    "category": "Special",
    "power": 65,
    "accuracy": 100,
    "pp": 20,
    "effect": "Has a 10% chance to lower the target's Speed by one stage."
  },
  {
    "id": 62,
    "name": "Aurora Beam",
    "type": "Ice",
    "category": "Special",
    "power": 65,
    "accuracy": 100,
    "pp": 20,
    "effect": "Has a 10% chance to lower the target's Attack by one stage."
  },
  {
    "id": 63,
    "name": "Hyper Beam",
    "type": "Normal",
    "category": "Special",
    "power": 150,
    "accuracy": 90,
    "pp": 5,
    "effect": "User foregoes its next turn to recharge."
  },
  {
    "id": 64,
    "name": "Peck",
    "type": "Flying",
    "category": "Physical",
    "power": 35,
    "accuracy": 100,
    "pp": 35,
    "effect": "Inflicts regular damage with no additional effect."
  },
  {
    "id": 65,
    "name": "Drill Peck",
    "type": "Flying",
    "category": "Physical",
    "power": 80,
    "accuracy": 100,
    "pp": 20,
    "effect": "Inflicts regular damage with no additional effect."
  },
  {
    "id": 66,
    "name": "Submission",
    "type": "Fighting",
    "category": "Physical",
    "power": 80,
    "accuracy": 80,
    "pp": 20,
    "effect": "User receives 1/4 the damage it inflicts in recoil."
  },
  {
    "id": 67,
    "name": "Low Kick",
    "type": "Fighting",
    "category": "Physical",
    "power": null,
    "accuracy": 100,
    "pp": 20,
    "effect": "Inflicts more damage to heavier targets, with a maximum of 120 power."
  },
  {
    "id": 68,
    "name": "Counter",
    "type": "Fighting",
    "category": "Physical",
    "power": null,
    "accuracy": 100,
    "pp": 20,
    "effect": "Inflicts twice the damage the user received from the last physical hit it took."
  },
  {
    "id": 69,
    "name": "Seismic Toss",
    "type": "Fighting",
    "category": "Physical",
    "power": null,
    "accuracy": 100,
    "pp": 20,
    "effect": "Inflicts damage equal to the user's level."
  },
  {
    "id": 70,
    "name": "Strength",
    "type": "Normal",
    "category": "Physical",
    "power": 80,
    "accuracy": 100,
    "pp": 15,
    "effect": "Inflicts regular damage with no additional effect."
  },
  {
    "id": 71,
    "name": "Absorb",
    "type": "Grass",
    "category": "Special",
    "power": 20,
    "accuracy": 100,
    "pp": 25,
    "effect": "Drains half the damage inflicted to heal the user."
  },
  {
    "id": 72,
    "name": "Mega Drain",
    "type": "Grass",
    "category": "Special",
    "power": 40,
    "accuracy": 100,
    "pp": 15,
    "effect": "Drains half the damage inflicted to heal the user."
  },
  {
    "id": 73,
    "name": "Leech Seed",
    "type": "Grass",
    "category": "Status",
    "power": null,
    "accuracy": 90,
    "pp": 10,
    "effect": "Seeds the target, stealing HP from it every turn."
  },
  {
    "id": 74,
    "name": "Growth",
    "type": "Normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "effect": "Raises the user's Attack and Special Attack by one stage."
  },
  {
    "id": 75,
    "name": "Razor Leaf",
    "type": "Grass",
    "category": "Physical",
    "power": 55,
    "accuracy": 95,
    "pp": 25,
    "effect": "Has an increased chance for a critical hit."
  },
  {
    "id": 76,
    "name": "Solar Beam",
    "type": "Grass",
    "category": "Special",
    "power": 120,
    "accuracy": 100,
    "pp": 10,
    "effect": "Requires a turn to charge before attacking."
  },
  {
    "id": 77,
    "name": "Poison Powder",
    "type": "Poison",
    "category": "Status",
    "power": null,
    "accuracy": 75,
    "pp": 35,
    "effect": "Poisons the target."
  },
  {
    "id": 78,
    "name": "Stun Spore",
    "type": "Grass",
    "category": "Status",
    "power": null,
    "accuracy": 75,
    "pp": 30,
    "effect": "Paralyzes the target."
  },
  {
    "id": 79,
    "name": "Sleep Powder",
    "type": "Grass",
    "category": "Status",
    "power": null,
    "accuracy": 75,
    "pp": 15,
    "effect": "Puts the target to sleep."
  },
  {
    "id": 80,
    "name": "Petal Dance",
    "type": "Grass",
    "category": "Special",
    "power": 120,
    "accuracy": 100,
    "pp": 10,
    "effect": "Hits every turn for 2-3 turns, then confuses the user."
  },
  {
    "id": 81,
    "name": "String Shot",
    "type": "Bug",
    "category": "Status",
    "power": null,
    "accuracy": 95,
    "pp": 40,
    "effect": "Lowers the target's Speed by two stages."
  },
  {
    "id": 82,
    "name": "Dragon Rage",
    "type": "Dragon",
    "category": "Special",
    "power": null,
    "accuracy": 100,
    "pp": 10,
    "effect": "Inflicts 40 points of damage."
  },
  {
    "id": 83,
    "name": "Fire Spin",
    "type": "Fire",
    "category": "Special",
    "power": 35,
    "accuracy": 85,
    "pp": 15,
    "effect": "Prevents the target from fleeing and inflicts damage for 2-5 turns."
  },
  {
    "id": 84,
    "name": "Thunder Shock",
    "type": "Electric",
    "category": "Special",
    "power": 40,
    "accuracy": 100,
    "pp": 30,
    "effect": "Has a 10% chance to paralyze the target."
  },
  {
    "id": 85,
    "name": "Thunderbolt",
    "type": "Electric",
    "category": "Special",
    "power": 90,
    "accuracy": 100,
    "pp": 15,
    "effect": "Has a 10% chance to paralyze the target."
  },
  {
    "id": 86,
    "name": "Thunder Wave",
    "type": "Electric",
    "category": "Status",
    "power": null,
    "accuracy": 90,
    "pp": 20,
    "effect": "Paralyzes the target."
  },
  {
    "id": 87,
    "name": "Thunder",
    "type": "Electric",
    "category": "Special",
    "power": 110,
    "accuracy": 70,
    "pp": 10,
    "effect": "Has a 30% chance to paralyze the target."
  },
  {
    "id": 88,
    "name": "Rock Throw",
    "type": "Rock",
    "category": "Physical",
    "power": 50,
    "accuracy": 90,
    "pp": 15,
    "effect": "Inflicts regular damage with no additional effect."
  },
  {
    "id": 89,
    "name": "Earthquake",
    "type": "Ground",
    "category": "Physical",
    "power": 100,
    "accuracy": 100,
    "pp": 10,
    "effect": "Inflicts regular damage and can hit Dig users."
  },
  {
    "id": 90,
    "name": "Fissure",
    "type": "Ground",
    "category": "Physical",
    "power": null,
    "accuracy": 30,
    "pp": 5,
    "effect": "Causes a one-hit KO."
  },
  {
    "id": 91,
    "name": "Dig",
    "type": "Ground",
    "category": "Physical",
    "power": 80,
    "accuracy": 100,
    "pp": 10,
    "effect": "User digs underground, dodging all attacks, and hits next turn."
  },
  {
    "id": 92,
    "name": "Toxic",
    "type": "Poison",
    "category": "Status",
    "power": null,
    "accuracy": 90,
    "pp": 10,
    "effect": "Badly poisons the target, inflicting more damage every turn."
  },
  {
    "id": 93,
    "name": "Confusion",
    "type": "Psychic",
    "category": "Special",
    "power": 50,
    "accuracy": 100,
    "pp": 25,
    "effect": "Has a 10% chance to confuse the target."
  },
  {
    "id": 94,
    "name": "Psychic",
    "type": "Psychic",
    "category": "Special",
    "power": 90,
    "accuracy": 100,
    "pp": 10,
    "effect": "Has a 10% chance to lower the target's Special Defense by one stage."
  },
  {
    "id": 95,
    "name": "Hypnosis",
    "type": "Psychic",
    "category": "Status",
    "power": null,
    "accuracy": 60,
    "pp": 20,
    "effect": "Puts the target to sleep."
  },
  {
    "id": 96,
    "name": "Meditate",
    "type": "Psychic",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 40,
    "effect": "Raises the user's Attack by one stage."
  },
  {
    "id": 97,
    "name": "Agility",
    "type": "Psychic",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 30,
    "effect": "Raises the user's Speed by two stages."
  },
  {
    "id": 98,
    "name": "Quick Attack",
    "type": "Normal",
    "category": "Physical",
    "power": 40,
    "accuracy": 100,
    "pp": 30,
    "effect": "Inflicts regular damage with no additional effect."
  },
  {
    "id": 99,
    "name": "Rage",
    "type": "Normal",
    "category": "Physical",
    "power": 20,
    "accuracy": 100,
    "pp": 20,
    "effect": "If the user is hit after using this move, its Attack rises by one stage."
  },
  {
    "id": 100,
    "name": "Teleport",
    "type": "Psychic",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "effect": "Immediately ends wild battles.  No effect otherwise."
  },
  {
    "id": 101,
    "name": "Night Shade",
    "type": "Ghost",
    "category": "Special",
    "power": null,
    "accuracy": 100,
    "pp": 15,
    "effect": "Inflicts damage equal to the user's level."
  },
  {
    "id": 102,
    "name": "Mimic",
    "type": "Normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 10,
    "effect": "Copies the target's last used move."
  },
  {
    "id": 103,
    "name": "Screech",
    "type": "Normal",
    "category": "Status",
    "power": null,
    "accuracy": 85,
    "pp": 40,
    "effect": "Lowers the target's Defense by two stages."
  },
  {
    "id": 104,
    "name": "Double Team",
    "type": "Normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 15,
    "effect": "Raises the user's evasion by one stage."
  },
  {
    "id": 105,
    "name": "Recover",
    "type": "Normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 5,
    "effect": "Heals the user by half its max HP."
  },
  {
    "id": 106,
    "name": "Harden",
    "type": "Normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 30,
    "effect": "Raises the user's Defense by one stage."
  },
  {
    "id": 107,
    "name": "Minimize",
    "type": "Normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 10,
    "effect": "Raises the user's evasion by two stages."
  },
  {
    "id": 108,
    "name": "Smokescreen",
    "type": "Normal",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 20,
    "effect": "Lowers the target's accuracy by one stage."
  },
  {
    "id": 109,
    "name": "Confuse Ray",
    "type": "Ghost",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 10,
    "effect": "Confuses the target."
  },
  {
    "id": 110,
    "name": "Withdraw",
    "type": "Water",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 40,
    "effect": "Raises the user's Defense by one stage."
  },
  {
    "id": 111,
    "name": "Defense Curl",
    "type": "Normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 40,
    "effect": "Raises user's Defense by one stage."
  },
  {
    "id": 112,
    "name": "Barrier",
    "type": "Psychic",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "effect": "Raises the user's Defense by two stages."
  },
  {
    "id": 113,
    "name": "Light Screen",
    "type": "Psychic",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 30,
    "effect": "Reduces damage from special attacks by 50% for five turns."
  },
  {
    "id": 114,
    "name": "Haze",
    "type": "Ice",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 30,
    "effect": "Resets all Pokémon's stats, accuracy, and evasion."
  },
  {
    "id": 115,
    "name": "Reflect",
    "type": "Psychic",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "effect": "Reduces damage from physical attacks by half."
  },
  {
    "id": 116,
    "name": "Focus Energy",
    "type": "Normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 30,
    "effect": "Increases the user's chance to score a critical hit."
  },
  {
    "id": 117,
    "name": "Bide",
    "type": "Normal",
    "category": "Physical",
    "power": null,
    "accuracy": null,
    "pp": 10,
    "effect": "User waits for two turns, then hits back for twice the damage it took."
  },
  {
    "id": 118,
    "name": "Metronome",
    "type": "Normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 10,
    "effect": "Randomly selects and uses any move in the game."
  },
  {
    "id": 119,
    "name": "Mirror Move",
    "type": "Flying",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "effect": "Uses the target's last used move."
  },
  {
    "id": 120,
    "name": "Self Destruct",
    "type": "Normal",
    "category": "Physical",
    "power": 200,
    "accuracy": 100,
    "pp": 5,
    "effect": "User faints."
  },
  {
    "id": 121,
    "name": "Egg Bomb",
    "type": "Normal",
    "category": "Physical",
    "power": 100,
    "accuracy": 75,
    "pp": 10,
    "effect": "Inflicts regular damage with no additional effect."
  },
  {
    "id": 122,
    "name": "Lick",
    "type": "Ghost",
    "category": "Physical",
    "power": 30,
    "accuracy": 100,
    "pp": 30,
    "effect": "Has a 30% chance to paralyze the target."
  },
  {
    "id": 123,
    "name": "Smog",
    "type": "Poison",
    "category": "Special",
    "power": 30,
    "accuracy": 70,
    "pp": 20,
    "effect": "Has a 40% chance to poison the target."
  },
  {
    "id": 124,
    "name": "Sludge",
    "type": "Poison",
    "category": "Special",
    "power": 65,
    "accuracy": 100,
    "pp": 20,
    "effect": "Has a 30% chance to poison the target."
  },
  {
    "id": 125,
    "name": "Bone Club",
    "type": "Ground",
    "category": "Physical",
    "power": 65,
    "accuracy": 85,
    "pp": 20,
    "effect": "Has a 10% chance to make the target flinch."
  },
  {
    "id": 126,
    "name": "Fire Blast",
    "type": "Fire",
    "category": "Special",
    "power": 110,
    "accuracy": 85,
    "pp": 5,
    "effect": "Has a 10% chance to burn the target."
  },
  {
    "id": 127,
    "name": "Waterfall",
    "type": "Water",
    "category": "Physical",
    "power": 80,
    "accuracy": 100,
    "pp": 15,
    "effect": "Has a 20% chance to make the target flinch."
  },
  {
    "id": 128,
    "name": "Clamp",
    "type": "Water",
    "category": "Physical",
    "power": 35,
    "accuracy": 85,
    "pp": 15,
    "effect": "Prevents the target from fleeing and inflicts damage for 2-5 turns."
  },
  {
    "id": 129,
    "name": "Swift",
    "type": "Normal",
    "category": "Special",
    "power": 60,
    "accuracy": null,
    "pp": 20,
    "effect": "Never misses."
  },
  {
    "id": 130,
    "name": "Skull Bash",
    "type": "Normal",
    "category": "Physical",
    "power": 130,
    "accuracy": 100,
    "pp": 10,
    "effect": "Raises the user's Defense by one stage.  User charges for one turn before attacking."
  },
  {
    "id": 131,
    "name": "Spike Cannon",
    "type": "Normal",
    "category": "Physical",
    "power": 20,
    "accuracy": 100,
    "pp": 15,
    "effect": "Hits 2-5 times in one turn."
  },
  {
    "id": 132,
    "name": "Constrict",
    "type": "Normal",
    "category": "Physical",
    "power": 10,
    "accuracy": 100,
    "pp": 35,
    "effect": "Has a 10% chance to lower the target's Speed by one stage."
  },
  {
    "id": 133,
    "name": "Amnesia",
    "type": "Psychic",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "effect": "Raises the user's Special Defense by two stages."
  },
  {
    "id": 134,
    "name": "Kinesis",
    "type": "Psychic",
    "category": "Status",
    "power": null,
    "accuracy": 80,
    "pp": 15,
    "effect": "Lowers the target's accuracy by one stage."
  },
  {
    "id": 135,
    "name": "Soft Boiled",
    "type": "Normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 5,
    "effect": "Heals the user by half its max HP."
  },
  {
    "id": 136,
    "name": "High Jump Kick",
    "type": "Fighting",
    "category": "Physical",
    "power": 130,
    "accuracy": 90,
    "pp": 10,
    "effect": "If the user misses, it takes half the damage it would have inflicted in recoil."
  },
  {
    "id": 137,
    "name": "Glare",
    "type": "Normal",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 30,
    "effect": "Paralyzes the target."
  },
  {
    "id": 138,
    "name": "Dream Eater",
    "type": "Psychic",
    "category": "Special",
    "power": 100,
    "accuracy": 100,
    "pp": 15,
    "effect": "Only works on sleeping Pokémon.  Drains half the damage inflicted to heal the user."
  },
  {
    "id": 139,
    "name": "Poison Gas",
    "type": "Poison",
    "category": "Status",
    "power": null,
    "accuracy": 90,
    "pp": 40,
    "effect": "Poisons the target."
  },
  {
    "id": 140,
    "name": "Barrage",
    "type": "Normal",
    "category": "Physical",
    "power": 15,
    "accuracy": 85,
    "pp": 20,
    "effect": "Hits 2-5 times in one turn."
  },
  {
    "id": 141,
    "name": "Leech Life",
    "type": "Bug",
    "category": "Physical",
    "power": 80,
    "accuracy": 100,
    "pp": 10,
    "effect": "Drains half the damage inflicted to heal the user."
  },
  {
    "id": 142,
    "name": "Lovely Kiss",
    "type": "Normal",
    "category": "Status",
    "power": null,
    "accuracy": 75,
    "pp": 10,
    "effect": "Puts the target to sleep."
  },
  {
    "id": 143,
    "name": "Sky Attack",
    "type": "Flying",
    "category": "Physical",
    "power": 140,
    "accuracy": 90,
    "pp": 5,
    "effect": "User charges for one turn before attacking.  Has a 30% chance to make the target flinch."
  },
  {
    "id": 144,
    "name": "Transform",
    "type": "Normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 10,
    "effect": "User becomes a copy of the target until it leaves battle."
  },
  {
    "id": 145,
    "name": "Bubble",
    "type": "Water",
    "category": "Special",
    "power": 40,
    "accuracy": 100,
    "pp": 30,
    "effect": "Has a 10% chance to lower the target's Speed by one stage."
  },
  {
    "id": 146,
    "name": "Dizzy Punch",
    "type": "Normal",
    "category": "Physical",
    "power": 70,
    "accuracy": 100,
    "pp": 10,
    "effect": "Has a 20% chance to confuse the target."
  },
  {
    "id": 147,
    "name": "Spore",
    "type": "Grass",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 15,
    "effect": "Puts the target to sleep."
  },
  {
    "id": 148,
    "name": "Flash",
    "type": "Normal",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 20,
    "effect": "Lowers the target's accuracy by one stage."
  },
  {
    "id": 149,
    "name": "Psywave",
    "type": "Psychic",
    "category": "Special",
    "power": null,
    "accuracy": 100,
    "pp": 15,
    "effect": "Inflicts damage between 50% and 150% of the user's level."
  },
  {
    "id": 150,
    "name": "Splash",
    "type": "Normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 40,
    "effect": "Does nothing."
  },
  {
    "id": 151,
    "name": "Acid Armor",
    "type": "Poison",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "effect": "Raises the user's Defense by two stages."
  },
  {
    "id": 152,
    "name": "Crabhammer",
    "type": "Water",
    "category": "Physical",
    "power": 100,
    "accuracy": 90,
    "pp": 10,
    "effect": "Has an increased chance for a critical hit."
  },
  {
    "id": 153,
    "name": "Explosion",
    "type": "Normal",
    "category": "Physical",
    "power": 250,
    "accuracy": 100,
    "pp": 5,
    "effect": "User faints."
  },
  {
    "id": 154,
    "name": "Fury Swipes",
    "type": "Normal",
    "category": "Physical",
    "power": 18,
    "accuracy": 80,
    "pp": 15,
    "effect": "Hits 2-5 times in one turn."
  },
  {
    "id": 155,
    "name": "Bonemerang",
    "type": "Ground",
    "category": "Physical",
    "power": 50,
    "accuracy": 90,
    "pp": 10,
    "effect": "Hits twice in one turn."
  },
  {
    "id": 156,
    "name": "Rest",
    "type": "Psychic",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 5,
    "effect": "User sleeps for two turns, completely healing itself."
  },
  {
    "id": 157,
    "name": "Rock Slide",
    "type": "Rock",
    "category": "Physical",
    "power": 75,
    "accuracy": 90,
    "pp": 10,
    "effect": "Has a 30% chance to make the target flinch."
  },
  {
    "id": 158,
    "name": "Hyper Fang",
    "type": "Normal",
    "category": "Physical",
    "power": 80,
    "accuracy": 90,
    "pp": 15,
    "effect": "Has a 10% chance to make the target flinch."
  },
  {
    "id": 159,
    "name": "Sharpen",
    "type": "Normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 30,
    "effect": "Raises the user's Attack by one stage."
  },
  {
    "id": 160,
    "name": "Conversion",
    "type": "Normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 30,
    "effect": "User's type changes to the type of one of its moves at random."
  },
  {
    "id": 161,
    "name": "Tri Attack",
    "type": "Normal",
    "category": "Special",
    "power": 80,
    "accuracy": 100,
    "pp": 10,
    "effect": "Has a 20% chance to burn, freeze, or paralyze the target."
  },
  {
    "id": 162,
    "name": "Super Fang",
    "type": "Normal",
    "category": "Physical",
    "power": null,
    "accuracy": 90,
    "pp": 10,
    "effect": "Inflicts damage equal to half the target's HP."
  },
  {
    "id": 163,
    "name": "Slash",
    "type": "Normal",
    "category": "Physical",
    "power": 70,
    "accuracy": 100,
    "pp": 20,
    "effect": "Has an increased chance for a critical hit."
  },
  {
    "id": 164,
    "name": "Substitute",
    "type": "Normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 10,
    "effect": "Transfers 1/4 of the user's max HP into a doll, protecting the user from further damage or status changes until it breaks."
  },
  {
    "id": 165,
    "name": "Struggle",
    "type": "Normal",
    "category": "Physical",
    "power": 50,
    "accuracy": null,
    "pp": 1,
    "effect": "User takes 1/4 its max HP in recoil."
  }
];
