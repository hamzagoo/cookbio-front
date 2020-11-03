import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditorsComponent } from './editors.component';
import { EventsAddComponent } from './events-add/events-add.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsParticipateComponent } from './events-participate/events-participate.component';

const routes: Routes = [{
  path: '',
  component: EditorsComponent,
  children: [{
    path: 'list',
    component: EventsListComponent,
  }, {
    path: 'add',
    component: EventsAddComponent,
  }, {
    path: 'particpate/:id',
    component: EventsParticipateComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditorsRoutingModule { }

export const routedComponents = [
  EditorsComponent,
  EventsListComponent,
  EventsAddComponent,
];
