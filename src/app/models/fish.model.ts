import { Level } from './level.model';

export class Fish {
  name: string;
  averageWeight: number;
  level: Level;

  constructor(name: string, averageWeight: number, level: Level) {
    this.name = name;
    this.averageWeight = averageWeight;
    this.level = level;
  }
}

