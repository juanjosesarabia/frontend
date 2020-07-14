import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoSearchComponent } from './ingreso-search.component';

describe('IngresoSearchComponent', () => {
  let component: IngresoSearchComponent;
  let fixture: ComponentFixture<IngresoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
