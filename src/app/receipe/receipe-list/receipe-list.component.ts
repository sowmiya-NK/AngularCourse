import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Receipe } from 'src/app/model/receipe.module';
import { ReceipeService } from 'src/app/service/receipe.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css'],
})
export class ReceipeListComponent implements OnInit {
  receipe: Receipe[] = [];
  constructor(private receipeservice: ReceipeService) {}
  ngOnInit(): void {
    this.receipe = this.receipeservice.getReceipe();
  }

  onReceipeSelected(receipe: Receipe) {
    console.log(receipe, 'receipe selected');
  }
}
