import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoEditComponent } from './ingreso-edit.component';

describe('IngresoEditComponent', () => {
  let component: IngresoEditComponent;
  let fixture: ComponentFixture<IngresoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
