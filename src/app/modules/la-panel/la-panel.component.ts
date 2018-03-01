import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ColumnDate } from '../column-data';
import { LaTableService } from '../../services/la-table.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'la-panel',
  templateUrl: './la-panel.component.html',
  styleUrls: ['./la-panel.component.scss']
})
export class LaPanelComponent implements OnInit {

  @Input() rtl: boolean; // Direction or grid, default false.
  @Input() comboColumn: boolean; // Show checkbox column, default false.
  @Input() editSchema: boolean; // Allow edit the schema of the table, show checkbox to delete columns, default false.
  @Input() editData: boolean; // Allow edit the cells of thetable.

  @Output() save = new EventEmitter<any>(); // Return columns and data when save table.

  editMode: boolean; // If table in edit mode.

  constructor(private laTableService: LaTableService) {
    this.rtl = false;
    this.editMode = false;
    this.editSchema = false;
    this.editData = false;
   }

  ngOnInit() {
  }

  changeEditMode() {
    this.editMode = this.laTableService.changeEditMode();
  }

  addRow() {
    this.laTableService.addRow();
  }

  deleteRow() {
    this.laTableService.deleteRow();
  }

  /*
   * Add new empty column.
   */
  addColumn() {
    const colIndex = this.laTableService.getColumns().length + 1;
    this.laTableService.addColumn(new ColumnDate('שם עמודה', 'property' + colIndex, 'text', 15, 'center', 'center'));
  }

  deleteColumn() {
    this.laTableService.deleteColumn();
  }

  returnTable() {
    this.save.emit();
  }
}
