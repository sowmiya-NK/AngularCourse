import { Component, Input, EventEmitter } from '@angular/core';
import { Receipe } from 'src/app/model/receipe.module';
import { ReceipeService } from 'src/app/service/receipe.service';

@Component({
  selector: 'app-receipe-items',
  templateUrl: './receipe-items.component.html',
  styleUrls: ['./receipe-items.component.css'],
})
export class ReceipeItemsComponent {
  @Input() receipe!: Receipe;
  constructor(private receipeService: ReceipeService) {}

  selectedReceipe() {
    this.receipeService.receipeselector.emit(this.receipe);
  }
}
