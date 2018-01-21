import { Component, OnInit } from '@angular/core';
import { Console } from '@angular/compiler/src/private_import_core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor() { }
  title = "HOME";
  ngOnInit() {
    console.log("home.component cargado");

  }

}
