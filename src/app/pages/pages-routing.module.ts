import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { AuthentificationPageComponent } from './auth/authentification-page.component';
import { HomeComponent } from './home/home.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [ {
    path: 'home/parametre-generaux/product',
    loadChildren: './product/product.module#ProductModule',
  },{
    path: 'events',
    loadChildren: './editors/editors.module#EditorsModule',
  },
  {
    path: 'login',
    component: AuthentificationPageComponent
  },{
    path: 'home',
    component: HomeComponent,
  } ,{
    path: 'panier',
    component: PanierComponent,
  }
  
  /* {
    path: 'modal-overlays',
    loadChildren: './modal-overlays/modal-overlays.module#ModalOverlaysModule',
  }, {
    path: 'extra-components',
    loadChildren: './extra-components/extra-components.module#ExtraComponentsModule',
  }, {
    path: 'bootstrap',
    loadChildren: './bootstrap/bootstrap.module#BootstrapModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  }, {
    path: 'miscellaneous',
    loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
  },*/ ,{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: '**',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
