//Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminRoutingModule } from './admin-routing.module';

//Componenetes
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/List/List.component';
import { AddComponent } from './components/Add/Add.component';
import { EditComponent } from './components/Edit/Edit.component';

@NgModule({
    declarations: [
        MainComponent,
        ListComponent,
        AddComponent,
        EditComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        AdminRoutingModule
    ]/*,
    exports: [
        MainComponent,
        ListComponent,
        AddComponent,
        EditComponent
    ],
    providers: []*/
})
export class AdminModule { }
