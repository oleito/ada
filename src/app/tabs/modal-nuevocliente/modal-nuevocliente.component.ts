import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-nuevocliente',
  templateUrl: './modal-nuevocliente.component.html',
  styleUrls: ['./modal-nuevocliente.component.scss'],
})
export class ModalNuevoclienteComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() { }
  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  onSubmitPago() {
    this.dismissModal();
  }

}
