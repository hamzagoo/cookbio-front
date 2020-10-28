import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'app/pages/Product/product';

@Component({
  selector: 'ngx-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
<<<<<<< HEAD
  cardObject: Product;
=======
  cardObject: any;
>>>>>>> 1d4abffb6a3fc3a2370002fc497ff7e8ce012dab

  @Input()
  button? = {
    buttonLabel : "",
    buttonAction : "",
  }

<<<<<<< HEAD
  
  @Output() 
  cardDetail = new EventEmitter();

=======
>>>>>>> 1d4abffb6a3fc3a2370002fc497ff7e8ce012dab
  @Output() 
  action = new EventEmitter();

  constructor() { }

  ngOnInit(): void { 
  }

  actionOnClick(){
    this.action.emit(this.cardObject);
  }
<<<<<<< HEAD
  cardDetailOnClick(){
    this.cardDetail.emit(this.cardObject);
  }
=======
>>>>>>> 1d4abffb6a3fc3a2370002fc497ff7e8ce012dab
}
