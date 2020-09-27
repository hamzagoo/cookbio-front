import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiviteeComponent } from './activitee.component';
import { ActiviteeListComponent } from './activitee-list/activitee-list.component';
import { Routes, RouterModule } from '@angular/router';
import { ActiviteeAddComponent } from './activitee-add/activitee-add.component';
import { ActiviteeUpdateComponent } from './activitee-update/activitee-update.component';
import { ResolveActiviteeService } from './activitee-resolve';



const routes: Routes = [{
  path: '',
  component: ActiviteeComponent,
  children: [{
    path: 'list',
    component: ActiviteeListComponent,
  },
  {
    path: 'add',
  component: ActiviteeAddComponent
  },
  {
    path: 'update/:id',
    component: ActiviteeUpdateComponent,
    resolve : {
      maDonnee: ResolveActiviteeService 
    }
  }
]
}]
     
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActiviteeRoutingModule { }
