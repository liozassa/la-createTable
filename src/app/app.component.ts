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
        property: 'first_name',
        type: 'text',
        width: 40,
        header_align: 'center',
        cell_align: 'center'
      },
      {
        name: 'שם משפחה',
        property: 'last_name',
        type: 'text',
        width: 40,
        header_align: 'center',
        cell_align: 'center'
      },
      {
        name: 'גיל',
        property: 'age',
        type: 'text',
        width: 10,
        header_align: 'center',
        cell_align: 'center'
      }
    ];

    this.data = [
      { first_name: 'ליעוז', last_name: 'אסא', age: '29'},
      { first_name: 'מיטל', last_name: 'אסא', age: '29'},
      { first_name: 'נועה', last_name: 'מלול', age: '24'}
    ];
  }

  saveTable(event) {
    console.log('columns', event.columns);
    console.log('data', event.data);
  }
}
