import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoSearchComponent } from './producto-search.component';

describe('ProductoSearchComponent', () => {
  let component: ProductoSearchComponent;
  let fixture: ComponentFixture<ProductoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
