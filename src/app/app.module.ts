import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

//modulo
import{AdminModule }from './admin/admin.module';

//componentes
import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EditComponent } from './admin/components/edit/edit.component';
import { AddComponent } from './admin/components/add/add.component';
import { ListComponent } from './admin/components/list/list.component';
import { MainComponent } from './admin/components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ProveedorComponent,
    HomeComponent,
    ClienteComponent,
    EditComponent,
    AddComponent,
    ListComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AdminModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
