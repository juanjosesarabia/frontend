import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaPadreComponent } from './salida-padre.component';

describe('SalidaPadreComponent', () => {
  let component: SalidaPadreComponent;
  let fixture: ComponentFixture<SalidaPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalidaPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidaPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
