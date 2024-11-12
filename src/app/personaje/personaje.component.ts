import { Personaje } from './personaje';
import { PersonajeService } from './personaje.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  personajes!: Array<Personaje>;
  constructor(private personajeService: PersonajeService) { }

  getPersonajes(){
    this.personajeService.getPersonajes().subscribe(personajes => {
      this.personajes = personajes;
      console.log(this.personajes)
    })
  }

  ngOnInit() {
    this.getPersonajes();
  }

}
