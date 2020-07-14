import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoRegistrerComponent } from './producto-registrer.component';

describe('ProductoRegistrerComponent', () => {
  let component: ProductoRegistrerComponent;
  let fixture: ComponentFixture<ProductoRegistrerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoRegistrerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoRegistrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
