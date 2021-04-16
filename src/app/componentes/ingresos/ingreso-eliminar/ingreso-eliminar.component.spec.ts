import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoEliminarComponent } from './ingreso-eliminar.component';

describe('IngresoEliminarComponent', () => {
  let component: IngresoEliminarComponent;
  let fixture: ComponentFixture<IngresoEliminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoEliminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
