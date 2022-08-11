import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './components/shared/shared.module';
import { NombreApellido } from './components/pipe/nombre-apellido.pipe';
//Componente Principal
import { TablaComponent } from './components/tabla/tabla.component';
import { ResaltadoDirective } from './components/directive/resaltado.directive';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    NombreApellido,
    ResaltadoDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
