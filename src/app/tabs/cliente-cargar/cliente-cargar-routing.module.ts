import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteCargarPage } from './cliente-cargar.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteCargarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteCargarPageRoutingModule {}
