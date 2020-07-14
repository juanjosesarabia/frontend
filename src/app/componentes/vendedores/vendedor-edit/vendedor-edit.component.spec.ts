import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorEditComponent } from './vendedor-edit.component';

describe('VendedorEditComponent', () => {
  let component: VendedorEditComponent;
  let fixture: ComponentFixture<VendedorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
