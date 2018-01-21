import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { ProductoComponent } from './producto/producto.component';
import { HomeComponent } from './home/home.component';
import { AppModule } from 'app/app.module';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'producto', component: ProductoComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', component: ProductoComponent }
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
