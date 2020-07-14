import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioRegisComponent } from './usuario-regis.component';

describe('UsuarioRegisComponent', () => {
  let component: UsuarioRegisComponent;
  let fixture: ComponentFixture<UsuarioRegisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioRegisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioRegisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
