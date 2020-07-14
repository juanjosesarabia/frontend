import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorSearchComponent } from './vendedor-search.component';

describe('VendedorSearchComponent', () => {
  let component: VendedorSearchComponent;
  let fixture: ComponentFixture<VendedorSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
