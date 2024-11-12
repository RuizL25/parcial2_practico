import { Component, OnInit } from '@angular/core';
import { Personaje } from '../personaje';
import { PersonajeService } from '../personaje.service';

@Component({
  selector: 'app-personaje-listar',
  templateUrl: './personaje-listar.component.html',
  styleUrls: ['./personaje-listar.component.css']
})
export class PersonajeListarComponent implements OnInit {

  selected : Boolean = false;
  selectedPersonaje !: Personaje;
  personajes!: Array<Personaje>;
  constructor(private personajeService: PersonajeService) { }

  onSelected(personaje: Personaje):void{
    this.selected = true;
    this.selectedPersonaje = personaje;
  }

  getPersonajes(){
    this.personajeService.getPersonajes().subscribe(personajes => {
      this.personajes = personajes.slice(0,10);
    })
  }

  ngOnInit() {
    this.getPersonajes();
  }

}
