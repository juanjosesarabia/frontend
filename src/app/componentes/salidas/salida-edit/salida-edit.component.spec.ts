import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaEditComponent } from './salida-edit.component';

describe('SalidaEditComponent', () => {
  let component: SalidaEditComponent;
  let fixture: ComponentFixture<SalidaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalidaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
