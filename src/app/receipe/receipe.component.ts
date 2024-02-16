import { Component, OnInit } from '@angular/core';
import { Receipe } from '../model/receipe.module';
import { ReceipeService } from '../service/receipe.service';

@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.component.html',
  styleUrls: ['./receipe.component.css'],
})
export class ReceipeComponent implements OnInit {
  selectedReceipe!: Receipe;
  constructor(private receipeService: ReceipeService) {}
  ngOnInit() {
    this.receipeService.receipeselector.subscribe(
      (receipe: Receipe) => (this.selectedReceipe = receipe)
    );
  }
}
