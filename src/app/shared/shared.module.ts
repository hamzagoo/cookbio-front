import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { MaterialModule } from 'app/material/material.module';



@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule
  ],
  exports: [MaterialModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
