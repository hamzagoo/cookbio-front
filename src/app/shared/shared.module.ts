import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SlideComponent } from './components/slide/slide.component';

@NgModule({
  declarations: [CardComponent, SlideComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [ MatCardModule , CardComponent, SlideComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
