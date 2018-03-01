import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ColumnDate } from '../column-data';
import { LaTableService } from '../../services/la-table.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'la-table',
  templateUrl: './la-table.component.html',
  styleUrls: ['./la-table.component.scss']
})
export class LaTableComponent implements OnInit {

  @Input() rtl: boolean; // Direction or grid, default false.
  @Input() comboColumn: boolean; // Show checkbox column, default false.
  @Input() editSchema: boolean; // Allow edit the schema of the table, show checkbox to delete columns, default false.
  @Input() editData: boolean; // Allow edit the cells of thetable.
  @Input() columns: ColumnDate[]; // Data about the table.
  @Input() data: any[]; // Data of table.

  @Output() save = new EventEmitter<any>(); // Return columns and data when save table.

  constructor(private laTableService: LaTableService) {
    this.rtl = false;
    this.comboColumn = false;
    this.editSchema = false;
    this.editData = false;
    this.columns = [];
    this.data = [];
  }

  ngOnInit() {
    this.laTableService.setColumns(this.columns);
    this.laTableService.setRows(this.data);
  }

  returnTable() {
    this.save.emit({
      columns: this.laTableService.getColumns(),
      data: this.laTableService.getRows()
    });
  }
}
