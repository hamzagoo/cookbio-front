import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'app/pages/Product/product';

@Component({
  selector: 'ngx-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  cardObject: any;

  @Input()
  button? = {
    buttonLabel : "",
    buttonAction : "",
  }

  @Output() 
  action = new EventEmitter();

  constructor() { }

  ngOnInit(): void { 
  }

  actionOnClick(){
    this.action.emit(this.cardObject);
  }
}
