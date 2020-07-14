import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorRegistrerComponent } from './vendedor-registrer.component';

describe('VendedorRegistrerComponent', () => {
  let component: VendedorRegistrerComponent;
  let fixture: ComponentFixture<VendedorRegistrerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorRegistrerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorRegistrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
