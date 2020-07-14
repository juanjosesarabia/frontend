import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoRegistrerComponent } from './ingreso-registrer.component';

describe('IngresoRegistrerComponent', () => {
  let component: IngresoRegistrerComponent;
  let fixture: ComponentFixture<IngresoRegistrerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoRegistrerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoRegistrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
