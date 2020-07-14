import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoDeleteComponent } from './ingreso-delete.component';

describe('IngresoDeleteComponent', () => {
  let component: IngresoDeleteComponent;
  let fixture: ComponentFixture<IngresoDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
