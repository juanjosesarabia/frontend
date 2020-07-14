import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaSearchComponent } from './salida-search.component';

describe('SalidaSearchComponent', () => {
  let component: SalidaSearchComponent;
  let fixture: ComponentFixture<SalidaSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalidaSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
