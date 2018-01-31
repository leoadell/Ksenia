import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Componenetes
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/List/List.component';
import { AddComponent } from './components/Add/Add.component';
import { EditComponent } from './components/Edit/Edit.component';

const adminRoutes: Routes = [
    {
        path: 'admin-panel',
        component: MainComponent,
        children: [
            { path: '', redirectTo: 'listado', pathMatch: 'full' },
            { path: 'listado', component: ListComponent },
            { path: 'crear', component: AddComponent },
            { path: 'editar', component: EditComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule{}
