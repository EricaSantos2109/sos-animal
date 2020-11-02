import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicialMapaPage } from './inicial-mapa.page';

const routes: Routes = [
  {
    path: '',
    component: InicialMapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicialMapaPageRoutingModule {}
