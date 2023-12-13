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

// generate 10 fishes with scientific names and average weights
export const FISHES: Fish[] = [
  new Fish('Sardine', 0.1, new Level(1, 'Beginner', 10)),
  new Fish('Sole', 0.5, new Level(1, 'Beginner', 10)),
  new Fish('Dorade', 0.8, new Level(1, 'Beginner', 10)),
  new Fish('Bar', 1.5, new Level(2, 'Intermediate', 20)),
  new Fish('Merou', 2.5, new Level(2, 'Intermediate', 20)),
  new Fish('Thon', 3.5, new Level(3, 'Advanced', 30)),
  new Fish('Espadon', 4.5, new Level(3, 'Advanced', 30)),
  new Fish('Requin', 5.5, new Level(4, 'Expert', 40)),
  new Fish('Baleine', 6.5, new Level(4, 'Expert', 40)),
  new Fish('Cachalot', 7.5, new Level(5, 'Master', 50))
];


