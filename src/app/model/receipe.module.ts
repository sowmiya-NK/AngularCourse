import { Ingrediant } from './Ingrediant.module';

export class Receipe {
  name: string;
  description: string;
  imagePath: string;
  ingrediants: Ingrediant[];
  constructor(n: string, d: string, i: string, ing: Ingrediant[]) {
    this.name = n;
    this.description = d;
    this.imagePath = i;
    this.ingrediants = ing;
  }
}
