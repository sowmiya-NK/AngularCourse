import { EventEmitter, Injectable } from '@angular/core';
import { Receipe } from '../model/receipe.module';
import { Ingrediant } from '../model/Ingrediant.module';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class ReceipeService {
  constructor(private slService:ShoppingListService) {}
  receipeselector = new EventEmitter<Receipe>();

  private receipe: Receipe[] = [
    new Receipe(
      'maggi',
      'fast food',
      'https://th.bing.com/th?id=OIP.X9WIHvGEsvTvayzMM5HCBgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      [new Ingrediant('maggi', 100), new Ingrediant('masala', 10)]
    ),
    new Receipe(
      'Noodles',
      'fast food',
      'https://th.bing.com/th?id=OIP.X9WIHvGEsvTvayzMM5HCBgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      [new Ingrediant('noodles', 500)]
    ),
  ];

  getReceipe() {
    return this.receipe;
  }

  addIngredianttoShoppingList(ingrediants:Ingrediant[]){
    this.slService.addIngredianttoShoppingList(ingrediants)


  }
}
