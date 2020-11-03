import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-product',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [``],
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
