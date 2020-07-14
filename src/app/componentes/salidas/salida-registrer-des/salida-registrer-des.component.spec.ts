import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaRegistrerDesComponent } from './salida-registrer-des.component';

describe('SalidaRegistrerDesComponent', () => {
  let component: SalidaRegistrerDesComponent;
  let fixture: ComponentFixture<SalidaRegistrerDesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalidaRegistrerDesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidaRegistrerDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
