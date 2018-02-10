import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaPanelComponent } from './la-panel.component';

describe('LaPanelComponent', () => {
  let component: LaPanelComponent;
  let fixture: ComponentFixture<LaPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
