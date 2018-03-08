# LaCreateTable

## Installing

Install the current stable release:

```
npm install la-create-table --save
```

Or install the latest beta release:

```
npm install la-create-table@next --save
```

## Used

Add to your app.module.ts file the next import:

```
import { LaTableModule } from 'la-create-table/src/app/modules/la-table/la-table.module';
```

Add the tag '<la-table></la-table>' where you want the table.

## Properties

| Property Name | Description   |
| ------------- | ------------- |
| rtl | Direction or grid, default false. |
| comboColumn | Show checkbox column, default false. |
| editSchema | Allow edit the schema of the table, show checkbox to delete columns, default false. |
| editData | Allow edit the cells of thetable. |

## Input
### Columns

| Property Name | Description | Values |
| ------------- | ----------- | ----------- |
| name | The name of column in table. | any string in any language. |
| property | The name of the property from data. | string in english. |
| type | The type of the value of column. | test, number, checkbox |
| width | The width of the column in pressents. | number |
| header_align | The test align of the header. | left, center, right |
| cell_align | The test align of the celles. | left, center, right |

### Data

any json array by filed like columns names.

## Demo

link to demo.
