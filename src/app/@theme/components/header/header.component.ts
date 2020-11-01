import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { AnalyticsService } from '../../../@core/utils';
import { LayoutService } from '../../../@core/utils';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  avatare;

  userMenu = [{ title: 'Déconnexion' }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private analyticsService: AnalyticsService,
              private layoutService: LayoutService,
              private route: Router
              ) {
  }

  ngOnInit() {

     // Chargement du menu de l'utilisateur
     this.menuService.onItemClick().subscribe(
      (resp) => {
        if(resp.item.title == 'Déconnexion'){
        }
      }
    );

  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  goToLogin(){

    this.route.navigate(["./auth/login"]);
  }

  redirectToProductList(){
    this.route.navigate(["./pages/home/parametre-generaux/product/list"]);
  }

  redirectToEventsList(){
    this.route.navigate(["./pages/events/list"]);
  }
  goToPanier(){
    this.route.navigate(["./pages/panier"]);
  }
}
