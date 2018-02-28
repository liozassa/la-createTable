import { Component, OnInit, Input } from '@angular/core';
import { ColumnDate } from '../column-data';
import { LaTableService } from '../../services/la-table.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'la-grid',
  templateUrl: './la-grid.component.html',
  styleUrls: ['./la-grid.component.scss']
})
export class LaGridComponent implements OnInit {

  @Input() rtl: boolean; // Deriction or grid, default false.
  @Input() comboColumn: boolean; // Show checkbox column, default false.
  @Input() editSchema: boolean; // Allow edit the schema of the table, show checkbox to delete columns, default false.
  @Input() editData: boolean; // Allow edit the cells of thetable.

  selectedColumn: number;
  selectedRow: number;
  columns: ColumnDate[];
  data: any[];

  constructor(private laTableService: LaTableService) {
    this.rtl = false;
    this.comboColumn = false;
    this.editSchema = false;
    this.editData = false;
    this.columns = [];
    this.data = [];
  }

  ngOnInit() {
    this.columns = this.laTableService.getColumns();
    this.data = this.laTableService.getRows();
  }

  /*
   * Select row on click.
   * Clear select if second click on same row.
   */
  setClickedRow(index: number) {
    if (this.laTableService.selectedRowIndex === index) {
      this.laTableService.clearSelectedRow();
    } else {
      this.laTableService.selectedRowIndex = index;
      // this.laTableService.selectedRowData = this.laTableService.columns[index];
    }
  }

  /*
   * Select row on click.
   * Clear select if second click on same row.
   */
  setClickedColumn(index: number) {
    if (this.laTableService.selectedColumnIndex === index) {
      this.laTableService.clearSelectedColumn();
    } else {
      this.selectedColumn = index;
      this.laTableService.selectedColumnIndex = index;
    }
  }

  getDirection(): string {
    return this.rtl ? 'rtl' : 'ltr';
  }

  getTextAlign(align: string) {
    switch (align) {
      case 'right':
        return 'right';
      case 'center':
        return 'center';
      case 'left':
        return 'left';
      default:
        return this.rtl ? 'right' : 'left';
    }
  }

  getWidth(width: number) {
    if (this.rtl) {
      return (width * 90) / 100;
    }
    return width;
  }

  updateColumn(colId: number, property: string, event: any) {
    const value = event.target.value;
    this.laTableService.updateColumn(colId, property, value);
  }

  updateCell(rowId: number, property: string, event: any) {
    const value = event.target.value;
    this.laTableService.updateCell(rowId, property, value);
  }

}
