/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PersonajeListarComponent } from './personaje-listar.component';

describe('PersonajeListarComponent', () => {
  let component: PersonajeListarComponent;
  let fixture: ComponentFixture<PersonajeListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonajeListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajeListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
