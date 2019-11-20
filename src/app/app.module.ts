import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { CarroPrestamosComponent } from './carro-prestamos/carro-prestamos.component';
import { ReservaComponent } from './reserva/reserva.component';
import { DVDComponent } from './dvd/dvd.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarroPrestamosComponent,
    ReservaComponent,
    DVDComponent,
    ReservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
