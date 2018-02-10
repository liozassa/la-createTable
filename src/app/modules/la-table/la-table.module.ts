import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaTableComponent } from './la-table.component';
import { LaTableService } from '../../services/la-table.service';
import { LaGridModule } from '../la-grid/la-grid.module';
import { LaPanelModule } from '../la-panel/la-panel.module';

@NgModule({
  imports: [
    CommonModule,
    LaGridModule,
    LaPanelModule
  ],
  declarations: [LaTableComponent],
  exports: [LaTableComponent],
  providers: [LaTableService],
})
export class LaTableModule { }
