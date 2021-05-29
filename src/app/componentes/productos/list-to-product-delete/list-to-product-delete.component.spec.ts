import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListToProductDeleteComponent } from './list-to-product-delete.component';

describe('ListToProductDeleteComponent', () => {
  let component: ListToProductDeleteComponent;
  let fixture: ComponentFixture<ListToProductDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListToProductDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListToProductDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
