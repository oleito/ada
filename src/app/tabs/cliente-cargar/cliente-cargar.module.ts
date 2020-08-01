import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteCargarPageRoutingModule } from './cliente-cargar-routing.module';

import { ClienteCargarPage } from './cliente-cargar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteCargarPageRoutingModule
  ],
  declarations: [ClienteCargarPage]
})
export class ClienteCargarPageModule {}
