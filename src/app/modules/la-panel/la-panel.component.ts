import { Component, OnInit } from '@angular/core';
import { ColumnDate } from '../column-data';
import { LaTableService } from '../../services/la-table.service';

@Component({
  selector: 'la-panel',
  templateUrl: './la-panel.component.html',
  styleUrls: ['./la-panel.component.scss']
})
export class LaPanelComponent implements OnInit {

  constructor(private laTableService: LaTableService) { }

  ngOnInit() {
  }

  addColumn() {
    this.laTableService.addColumn(new ColumnDate('צבע', 'color', 15));
  }

  deleteColumn() {
    this.laTableService.deleteColumn();
  }

  addRow() {

  }

}
