import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    CommonModule,
    MatCardModule
  ]
})
export class MaterialModule { }
