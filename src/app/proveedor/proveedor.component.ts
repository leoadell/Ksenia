import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'proveedor',
  templateUrl: './proveedor.component.html'
})
export class ProveedorComponent implements OnInit {

  constructor() { }
  title = "proveedor";
  ngOnInit() {
    console.log("proveedor.component cargado");
  }

}
