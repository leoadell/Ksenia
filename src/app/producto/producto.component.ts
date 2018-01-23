import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'producto',
  templateUrl: './producto.component.html'
})
export class ProductoComponent implements OnInit {

  public nombre: string;
  public detalle: string;
  public foto: string;
  public precioVenta: number;
  public precioCompra: number;
  public cantidad: number;

  constructor() {
    this.cantidad = 20;
    this.detalle = "hilo negro carretel chico de 10mts marca cadena";
    this.nombre = "Hilo negro";
    this.precioCompra = 12;
    this.precioVenta = 20;
  }
  ngOnInit() {
    console.log("producto.component cargado");
  }
}
