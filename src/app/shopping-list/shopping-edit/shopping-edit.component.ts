import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingrediant } from 'src/app/model/Ingrediant.module';
import { ShoppingListService } from 'src/app/service/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput')
  nameInputRef: ElementRef | undefined;
  @ViewChild('amountInput')
  amountInputRef: ElementRef | undefined;

  constructor(private shoppingService: ShoppingListService) {}

  addIngrediant() {
    const name = this.nameInputRef?.nativeElement.value;

    const amount = this.amountInputRef?.nativeElement.value;

    const newIngrediant = new Ingrediant(name, amount);
    this.shoppingService.ingrediantAdd(newIngrediant);
  }

  deleteIngrediant(){
    console.log("deleted");   
  }
}
