export type Move = {
  id: number;
  name: string;
  type: string;
  power: number | null;
  accuracy: number | null;
  pp: number;
};

// A selection of Gen 1 moves
export const gen1Moves: Move[] = [
  { id: 1, name: "Pound", type: "Normal", power: 40, accuracy: 100, pp: 35 },
  { id: 2, name: "Karate Chop", type: "Fighting", power: 50, accuracy: 100, pp: 25 },
  { id: 3, name: "Double Slap", type: "Normal", power: 15, accuracy: 85, pp: 10 },
  { id: 4, name: "Comet Punch", type: "Normal", power: 18, accuracy: 85, pp: 15 },
  { id: 5, name: "Mega Punch", type: "Normal", power: 80, accuracy: 85, pp: 20 },
  { id: 6, name: "Pay Day", type: "Normal", power: 40, accuracy: 100, pp: 20 },
  { id: 7, name: "Fire Punch", type: "Fire", power: 75, accuracy: 100, pp: 15 },
  { id: 8, name: "Ice Punch", type: "Ice", power: 75, accuracy: 100, pp: 15 },
  { id: 9, name: "Thunder Punch", type: "Electric", power: 75, accuracy: 100, pp: 15 },
  { id: 10, name: "Scratch", type: "Normal", power: 40, accuracy: 100, pp: 35 },
  { id: 11, name: "Vine Whip", type: "Grass", power: 45, accuracy: 100, pp: 25 },
  { id: 12, name: "Cut", type: "Normal", power: 50, accuracy: 95, pp: 30 },
  { id: 13, name: "Gust", type: "Flying", power: 40, accuracy: 100, pp: 35 },
  { id: 14, name: "Wing Attack", type: "Flying", power: 60, accuracy: 100, pp: 35 },
  { id: 15, name: "Fly", type: "Flying", power: 90, accuracy: 95, pp: 15 },
  { id: 16, name: "Bind", type: "Normal", power: 15, accuracy: 85, pp: 20 },
  { id: 17, name: "Slam", type: "Normal", power: 80, accuracy: 75, pp: 20 },
  { id: 18, name: "Vine Whip", type: "Grass", power: 45, accuracy: 100, pp: 25 },
  { id: 19, name: "Stomp", type: "Normal", power: 65, accuracy: 100, pp: 20 },
  { id: 20, name: "Double Kick", type: "Fighting", power: 30, accuracy: 100, pp: 30 },
  { id: 21, name: "Mega Kick", type: "Normal", power: 120, accuracy: 75, pp: 5 },
  { id: 22, name: "Jump Kick", type: "Fighting", power: 100, accuracy: 95, pp: 10 },
  { id: 23, name: "Rolling Kick", type: "Fighting", power: 60, accuracy: 85, pp: 15 },
  { id: 24, name: "Sand Attack", type: "Ground", power: null, accuracy: 100, pp: 15 },
  { id: 25, name: "Headbutt", type: "Normal", power: 70, accuracy: 100, pp: 15 },
  { id: 26, name: "Horn Attack", type: "Normal", power: 65, accuracy: 100, pp: 25 },
  { id: 27, name: "Fury Attack", type: "Normal", power: 15, accuracy: 85, pp: 20 },
  { id: 28, name: "Tackle", type: "Normal", power: 40, accuracy: 100, pp: 35 },
  { id: 29, name: "Body Slam", type: "Normal", power: 85, accuracy: 100, pp: 15 },
  { id: 30, name: "Wrap", type: "Normal", power: 15, accuracy: 90, pp: 20 }
];
