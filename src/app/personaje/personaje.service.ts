import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personaje } from './personaje';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

constructor(private http: HttpClient) { }
  personajes: Array<Personaje> = []
  private apiUrl = "https://hp-api.herokuapp.com/api/characters";

  getPersonajes(): Observable<Personaje[]>{
    return this.http.get<Personaje[]>(this.apiUrl)
  }

}
