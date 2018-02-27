export interface ColumnDate {
    name: string;
    property: string;
    type: string;
    width: number; // Percentage.
    header_align: string; // Deriction or grid, default by rtl.
    cell_align: string; // Deriction or grid, default by rtl.
}

export class ColumnDate implements ColumnDate {
    constructor(name?: string, property?: string, type?: string, width?: number, header_align?: string, cell_align?: string) {
        this.name = name;
        this.property = property;
        this.type = type;
        this.width = width;
        this.header_align = header_align;
        this.cell_align = cell_align;
    }
}
