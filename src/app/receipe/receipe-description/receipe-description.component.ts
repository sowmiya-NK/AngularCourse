import { Component, Input } from '@angular/core';
import { Receipe } from 'src/app/model/receipe.module';
import { ReceipeService } from 'src/app/service/receipe.service';

@Component({
  selector: 'app-receipe-description',
  templateUrl: './receipe-description.component.html',
  styleUrls: ['./receipe-description.component.css'],
})
export class ReceipeDescriptionComponent {
  @Input() receipe!: Receipe;
  constructor(private receipeService:ReceipeService){}

  addShoppingList(){
    this.receipeService.addIngredianttoShoppingList(this.receipe.ingrediants)

  }
  
}
