import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaRegistrerVenComponent } from './salida-registrer-ven.component';

describe('SalidaRegistrerVenComponent', () => {
  let component: SalidaRegistrerVenComponent;
  let fixture: ComponentFixture<SalidaRegistrerVenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalidaRegistrerVenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidaRegistrerVenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
