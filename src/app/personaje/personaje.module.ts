import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajeComponent } from './personaje.component';
import { PersonajeListarComponent } from './personaje-listar/personaje-listar.component';
import { PersonajeDetalleComponent } from './personaje-detalle/personaje-detalle.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [PersonajeListarComponent, PersonajeDetalleComponent],
  exports: [PersonajeListarComponent, PersonajeDetalleComponent]
})
export class PersonajeModule { }
