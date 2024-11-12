import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajeModule } from './personaje/personaje.module';
import { PersonajeComponent } from './personaje/personaje.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PersonajeComponent
  ],
  imports: [
    BrowserModule,
    PersonajeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PersonajeModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
