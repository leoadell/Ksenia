import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'proveedor',
  templateUrl: './proveedor.component.html'
})
export class ProveedorComponent implements OnInit {

  constructor() { }
  title = "componente proveedor";
  ngOnInit() {
    console.log("proveedor.component cargado");
  }

}
