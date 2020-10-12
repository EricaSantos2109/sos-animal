import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalizarAdocaoPage } from './finalizar-adocao.page';

const routes: Routes = [
  {
    path: '',
    component: FinalizarAdocaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalizarAdocaoPageRoutingModule {}
