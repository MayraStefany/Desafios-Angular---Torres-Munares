import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConciertosComponent } from './components/conciertos/conciertos.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ContenidoComponent,
    NavbarComponent,
    ConciertosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
