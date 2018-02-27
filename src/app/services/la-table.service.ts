import { Injectable } from '@angular/core';
import { ColumnDate } from '../modules/column-data';

@Injectable()
export class LaTableService {

  selectedRowIndex: number;
  selectedColumnIndex: number;
  // selectedRowData: any;
  private columns: ColumnDate[] = [];
  private data: any[] = [];
  editMode: boolean;

  constructor() {
    this.editMode = false;
  }

  /*
   * Change and return the edit mode.
   * true - edit on.
   * false - edit off.
   */
  changeEditMode(): boolean {
    this.editMode = !this.editMode;
    return this.editMode;
  }

  /*
   * Add new empty column.
   */
  addColumn(column: ColumnDate) {
    this.columns.push(column);
  }

  /*
   * Delete selected column.
   */
  deleteColumn() {
    if (this.selectedColumnIndex !== -1) {
      this.columns.splice(this.selectedColumnIndex, 1);
      this.selectedColumnIndex = -1;
    }
  }

  /*
   * Update name of spsific column.
   * colId - index of col in 'column' array.
   * value - new name of column.
   */
  updateColumn(colId: number, value: any) {
    this.columns[colId].name = value;
  }

  /*
   * Update value of spsific cell.
   * rowId - index of row in 'data' array.
   * property - spesific filed that update.
   * value - new value.
   */
  updateCell(rowId: number, property: string, value: any) {
    this.data[rowId][property] = value;
  }

  /*
   * Clear selected row.
   */
  clearSelectedRow(): void {
    this.selectedRowIndex = -1;
    // this.selectedRowData = null;
  }

  /*
   * Clear selected row.
   */
  clearSelectedColumn(): void {
    this.selectedColumnIndex = -1;
  }

  getColumns(): ColumnDate[] {
    return this.columns;
  }

  setColumns(columns: ColumnDate[]) {
    this.columns = columns;
  }

  getRows(): any[] {
    return this.data;
  }

  setRows(rows: any[]) {
    this.data = rows;
  }

}
