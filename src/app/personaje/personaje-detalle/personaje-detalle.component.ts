import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../personaje';

@Component({
  selector: 'app-personaje-detalle',
  templateUrl: './personaje-detalle.component.html',
  styleUrls: ['./personaje-detalle.component.css']
})
export class PersonajeDetalleComponent implements OnInit {

  @Input() personajeDetail!: Personaje;
  constructor() { }

  ngOnInit() {
  }

}
