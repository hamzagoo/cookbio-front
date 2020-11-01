import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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
  cardDetail = new EventEmitter();

  @Output() 
  action = new EventEmitter();

  constructor(private router : Router) { }

  ngOnInit(): void { 
  }

  actionOnClick(){
    this.action.emit(this.cardObject);

  }
  cardDetailOnClick(){
    console.log("cardDetailOnClick")
    this.cardDetail.emit(this.cardObject);
  }
}
