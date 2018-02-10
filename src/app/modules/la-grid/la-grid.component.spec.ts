import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaGridComponent } from './la-grid.component';

describe('LaGridComponent', () => {
  let component: LaGridComponent;
  let fixture: ComponentFixture<LaGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
