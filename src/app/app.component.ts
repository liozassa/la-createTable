import { Component } from '@angular/core';
import { ColumnDate } from './modules/column-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  columns: ColumnDate[];
  data: any[];

  constructor() {
    this.columns = [
      {
        name: 'שם פרטי',
        property: 'c1',
        order: 1,
        width: 40,
        header_align: 'center',
        cell_align: 'center'
      },
      {
        name: 'שם משפחה',
        property: 'c2',
        order: 2,
        width: 40,
        header_align: 'center',
        cell_align: 'center'
      },
      {
        name: 'גיל',
        property: 'c3',
        order: 3,
        width: 10,
        header_align: 'center',
        cell_align: 'center'
      }
    ];

    this.data = [
      { c1: 'ליעוז', c2: 'אסא', c3: '29'},
      { c1: 'מיטל', c2: 'אסא', c3: '29'},
      { c1: 'נועה', c2: 'מלול', c3: '24'}
    ];
  }

  saveTable(event) {
    console.log('columns', event.columns);
    console.log('data', event.data);
  }
}
