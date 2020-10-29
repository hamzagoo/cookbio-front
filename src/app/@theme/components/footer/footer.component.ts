import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  templateUrl: './footer.component.html',
})
export class FooterComponent {

  constructor(private router: Router){

  }
  redirectToListProduit(){
    this.router.navigate(["./pages/home/parametre-generaux/product/list"]);
  }
}
