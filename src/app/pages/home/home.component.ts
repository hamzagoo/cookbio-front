import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slideImages = [
    "../../../../assets/images/slides/slide.jpeg",
    "../../../../assets/images/slides/slide2.jpg"
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
