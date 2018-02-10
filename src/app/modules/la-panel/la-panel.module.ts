import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaPanelComponent } from './la-panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LaPanelComponent
  ],
  exports: [LaPanelComponent],
})
export class LaPanelModule { }
