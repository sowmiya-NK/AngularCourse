import { Component, Input, OnInit } from '@angular/core';
import { Ingrediant } from '../model/Ingrediant.module';
import { ShoppingListService } from '../service/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit{
  ingrediants: Ingrediant[] = [];
  constructor(private shoppingService: ShoppingListService) {}
  ngOnInit(): void {
    this.ingrediants=this.shoppingService.getIngrediant();
  }
}
