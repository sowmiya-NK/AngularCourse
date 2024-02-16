import { Injectable } from '@angular/core';
import { Ingrediant } from '../model/Ingrediant.module';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private ingrediants: Ingrediant[] = [
    new Ingrediant('apple', 10),
    new Ingrediant('orangwe', 10),
  ];

  constructor() {}

  getIngrediant() {
    return this.ingrediants;
  }
  ingrediantAdd(ingrediant: Ingrediant) {
    this.ingrediants.push(ingrediant);
    return this.ingrediants;
  }

  addIngredianttoShoppingList(ing: Ingrediant[]) {
    for (let i of ing) this.ingrediantAdd(i);
  }
}
