import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteDetallePageRoutingModule } from './cliente-detalle-routing.module';

import { ClienteDetallePage } from './cliente-detalle.page';
import { ModalPagoComponent } from '../modal-pago/modal-pago.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteDetallePageRoutingModule
  ],
  declarations: [ClienteDetallePage, ModalPagoComponent]
})
export class ClienteDetallePageModule {}
