import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalizarAdocaoPageRoutingModule } from './finalizar-adocao-routing.module';

import { FinalizarAdocaoPage } from './finalizar-adocao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalizarAdocaoPageRoutingModule
  ],
  declarations: [FinalizarAdocaoPage]
})
export class FinalizarAdocaoPageModule {}
