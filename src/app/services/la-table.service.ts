import { Injectable } from '@angular/core';
import { ColumnDate } from '../modules/column-data';

@Injectable()
export class LaTableService {

  selectedRowIndex: number;
  selectedColumnIndex: number;
  selectedRowData: any;
  columns: ColumnDate[] = [];
  data: any[] = [];

  constructor() { }

  addColumn(column: ColumnDate) {
    this.columns.push(column);
  }

  deleteColumn() {
    if (this.selectedColumnIndex !== -1) {
      this.columns.splice(this.selectedColumnIndex, 1);
      this.selectedColumnIndex = -1;
    }
  }



  /*
   * Clear selected row.
   */
  clearSelectedRow(): void {
    this.selectedRowIndex = -1;
    this.selectedRowData = null;
  }

  /*
   * Clear selected row.
   */
  clearSelectedColumn(): void {
    this.selectedColumnIndex = -1;
  }

}
