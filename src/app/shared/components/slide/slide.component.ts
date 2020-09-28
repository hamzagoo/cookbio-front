import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  @Input()
  images: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
