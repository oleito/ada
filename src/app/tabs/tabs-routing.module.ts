import { ArticulosPage } from './articulos/articulos.page';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { ClientesPage } from './clientes/clientes.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'clientes',
        children: [
          {
            path: '',
            component: ClientesPage
          },
          {
            path: 'cliente-detalle/:idCliente',
            loadChildren: () => import('../tabs/cliente-detalle/cliente-detalle.module').then(m => m.ClienteDetallePageModule)
          },
          {
            path: 'cliente-cargar',
            loadChildren: () => import('../tabs/cliente-cargar/cliente-cargar.module').then(m => m.ClienteCargarPageModule)
          },

          {
            path: 'cliente-pago/:idCliente',
            loadChildren: () => import('../tabs/cliente-pago/cliente-pago.module').then(m => m.ClientePagoPageModule)
          }
        ]
      },
      {
        path: 'articulos',
        children: [
          {
            path: '',
            component: ArticulosPage
          },
        ]
      },
      {
        path: '',
        redirectTo: 'clientes',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
