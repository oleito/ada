import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalNuevoclienteComponent } from '../modal-nuevocliente/modal-nuevocliente.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  showSearchbar = false;

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  onClickAddUserButton() {
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalNuevoclienteComponent,
    });
    return await modal.present();
  }

}
