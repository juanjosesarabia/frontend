import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPadreComponent } from './usuario-padre.component';

describe('UsuarioPadreComponent', () => {
  let component: UsuarioPadreComponent;
  let fixture: ComponentFixture<UsuarioPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
