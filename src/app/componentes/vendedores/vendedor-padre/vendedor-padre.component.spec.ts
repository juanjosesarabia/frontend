import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorPadreComponent } from './vendedor-padre.component';

describe('VendedorPadreComponent', () => {
  let component: VendedorPadreComponent;
  let fixture: ComponentFixture<VendedorPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
