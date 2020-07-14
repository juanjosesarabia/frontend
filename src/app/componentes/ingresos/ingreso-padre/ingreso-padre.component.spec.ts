import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoPadreComponent } from './ingreso-padre.component';

describe('IngresoPadreComponent', () => {
  let component: IngresoPadreComponent;
  let fixture: ComponentFixture<IngresoPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
