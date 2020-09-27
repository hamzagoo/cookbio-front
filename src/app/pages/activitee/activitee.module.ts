import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiviteeComponent } from './activitee.component';
import { ActiviteeListComponent } from './activitee-list/activitee-list.component';
import { ActiviteeService } from './activitie-service';
import { AgGridModule } from 'ag-grid-angular';
import { ThemeModule } from '../../@theme/theme.module';
import { ActiviteeRoutingModule } from './activitee-routing.module';
import { ActiviteeAddComponent } from './activitee-add/activitee-add.component';
import { ActiviteeUpdateComponent } from './activitee-update/activitee-update.component';
import {MatTooltipModule, MatIconModule, MatSelectModule, MatInputModule, MatButtonModule} from '@angular/material'; 
import {MatDialogModule} from '@angular/material/dialog'
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    ActiviteeComponent,
     ActiviteeListComponent,
     ActiviteeAddComponent,
     ActiviteeUpdateComponent
    ],
  imports: [
    CommonModule,
    ThemeModule,
    ActiviteeRoutingModule,
     AgGridModule.withComponents([]),
    // BrowserAnimationsModule,
     MatDialogModule,
     MatSelectModule,
     MatIconModule,
     MatTooltipModule,
     MatInputModule,
     MatButtonModule,
     NgMultiSelectDropDownModule
  ],
  providers: [
    ActiviteeService
  ],
})
export class ActiviteeModule { }

