export class Level {
  code: number;
  description: string;
  points: number;

  constructor(code: number, description: string, points: number) {
    this.code = code;
    this.description = description;
    this.points = points;
  }
}

// generate 5 levels with descriptions and points
export const LEVELS: Level[] = [
  new Level(1, 'Beginner', 10),
  new Level(2, 'Intermediate', 20),
  new Level(3, 'Advanced', 30),
  new Level(4, 'Expert', 40),
  new Level(5, 'Master', 50),
];