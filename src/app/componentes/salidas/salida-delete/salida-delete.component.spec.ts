import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaDeleteComponent } from './salida-delete.component';

describe('SalidaDeleteComponent', () => {
  let component: SalidaDeleteComponent;
  let fixture: ComponentFixture<SalidaDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalidaDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
