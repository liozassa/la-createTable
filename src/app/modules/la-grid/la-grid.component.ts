import { Component, OnInit, Input } from '@angular/core';
import { ColumnDate } from '../column-data';
import { LaTableService } from '../../services/la-table.service';

@Component({
  selector: 'la-grid',
  templateUrl: './la-grid.component.html',
  styleUrls: ['./la-grid.component.scss']
})
export class LaGridComponent implements OnInit {

  @Input() rtl: boolean; // Deriction or grid, default false.
  @Input() comboColumn: boolean; // show checkbox column, default false.
  @Input() editColumns: boolean; // show checkbox row to delete columns, default false.

  selectedColumn: number;
  selectedRow: number;
  columns: ColumnDate[];
  data: any[];

  constructor(private laTableService: LaTableService) {
    this.rtl = false;
    this.comboColumn = false;
    this.columns = [];
    this.data = [];
  }

  ngOnInit() {
    this.columns = this.laTableService.columns;
    this.data = this.laTableService.data;
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
      this.laTableService.selectedRowData = this.laTableService.columns[index];
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

}
