import { Component, OnInit, Input } from '@angular/core';
import { ColumnDate } from '../column-data';
import { LaTableService } from '../../services/la-table.service';

@Component({
  selector: 'la-table',
  templateUrl: './la-table.component.html',
  styleUrls: ['./la-table.component.scss']
})
export class LaTableComponent implements OnInit {

  @Input() rtl: boolean; // Deriction or grid, default false.
  @Input() comboColumn: boolean; // show checkbox column, default false.
  @Input() editColumns: boolean; // show checkbox column, default false.
  @Input() columns: ColumnDate[]; // Data about the table.
  @Input() data: any[]; // Data of table.

  constructor(private laTableService: LaTableService) {
    this.rtl = false;
    this.comboColumn = false;
    this.columns = [];
    this.data = [];
  }

  ngOnInit() {
    this.laTableService.columns = this.columns;
    this.laTableService.data = this.data;
  }
}
