import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public name: string;
  public detail: string;
  public foto: string;
  public precioVenta: number;
  public precioCompra: number;
  public cantidad: number;

  constructor() {
    this.cantidad = 20;
    this.detail = "hilo negro carretel chico de 10mts marca cadena";
    this.name = "Hilo negro";
    this.precioCompra = 12;
    this.precioVenta = 20;
  }

  ngOnInit() {
  }

}
