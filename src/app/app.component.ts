import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common/src/pipes/number_pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public name: string;
  public detail: string;
  public picture: string;
  public precioVenta: number;
  public precioCompra: number;
  public cantidad: number;

  title = 'app works!';

  constructor() {
    this.cantidad = 20;
    this.detail = "hilo negro carretel chico de 10mts marca cadena";
    this.name = "Hilo negro";
    this.precioCompra = 12;
    this.precioVenta = 20.50;
  }
}
