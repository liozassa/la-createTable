import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaGridComponent } from './la-grid.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule
  ],
  exports: [LaGridComponent],
  declarations: [LaGridComponent]
})
export class LaGridModule { }
