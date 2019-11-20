import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { CarroPrestamosComponent } from './carro-prestamos/carro-prestamos.component';
import { ReservaComponent } from './reserva/reserva.component';
import { DVDComponent } from './dvd/dvd.component';
import { SolicitudCompraComponent } from './solicitud-compra/solicitud-compra.component';

import { MaterialesComponent } from './materiales/materiales.component';
import { MaterialesService } from './materiales/materiales.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarroPrestamosComponent,
    ReservaComponent,
    DVDComponent,
    ReservaComponent,
    SolicitudCompraComponent,
    MaterialesComponent,
    MaterialesService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MaterialesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
