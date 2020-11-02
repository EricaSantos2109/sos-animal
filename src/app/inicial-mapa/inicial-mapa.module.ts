import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicialMapaPageRoutingModule } from './inicial-mapa-routing.module';

import { InicialMapaPage } from './inicial-mapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicialMapaPageRoutingModule
  ],
  declarations: [InicialMapaPage]
})
export class InicialMapaPageModule {}
