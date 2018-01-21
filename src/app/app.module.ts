import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
// import { ProveedorComponent } from './proveedor/proveedor.component';
import { HomeComponent } from './home/home.component';
// import { ClienteComponent } from './cliente/cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    // ProveedorComponent,
    HomeComponent
    // ClienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing

  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
