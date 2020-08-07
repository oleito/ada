import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';


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
            loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesPageModule)
          },
          {
            path: 'cliente-detalle/:idCliente',
            loadChildren: () => import('./cliente-detalle/cliente-detalle.module').then(m => m.ClienteDetallePageModule)
          },
        ]
      },
      {
        path: 'articulos',
        children: [
          {
            path: '',
            loadChildren: () => import('./articulos/articulos.module').then(m => m.ArticulosPageModule)
          },
          {
            path: 'articulo-detalle/:idArticulo',
            loadChildren: () => import('./articulo-detalle/articulo-detalle.module').then( m => m.ArticuloDetallePageModule)
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
