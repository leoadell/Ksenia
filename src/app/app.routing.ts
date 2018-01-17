import{ModuleWithProviders} from  '@angular/core';
import {Routes, RouterModule }from '@angular/router';

//Components
import{ProductoComponent} from './producto/producto.component';

const appRoutes: Routes=[
    {path: '', component: ProductoComponent},
]