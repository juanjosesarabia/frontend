import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaListComponent } from './salida-list.component';

describe('SalidaListComponent', () => {
  let component: SalidaListComponent;
  let fixture: ComponentFixture<SalidaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalidaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
