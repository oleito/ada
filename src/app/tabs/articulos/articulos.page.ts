import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.page.html',
  styleUrls: ['./articulos.page.scss'],
})
export class ArticulosPage implements OnInit {
  showSearchbar = false;


  articulos: any[] = [
    { nombre: "leandro" },
    { nombre: "leandro" },
    { nombre: "leandro" },
    { nombre: "leandro" },
    { nombre: "leandro" },
    { nombre: "leandro" },
    { nombre: "leandro" },
    { nombre: "leandro" },
    { nombre: "leandro" },
  ]

  constructor() { }

  ngOnInit() {
    console.log('articulos: ', this.articulos.length);
  }
  cardClick() {

  }
}
