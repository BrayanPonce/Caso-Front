import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutorRoutingModule } from './autor-routing.module';
import { AngularMaterialModule } from '../angular/Angular-Material.module';
import { AutorComponent } from './autor.component';
import { SideAutorComponent } from './side-autor/side-autor.component';
import { AgregarAutorComponent } from './pages/agregar-autor/agregar-autor.component';
import { BuscarAutorComponent } from './pages/buscar-autor/buscar-autor.component';
import { EditarAutorComponent } from './pages/editar-autor/editar-autor.component';
import { EliminarAutorComponent } from './pages/eliminar-autor/eliminar-autor.component';


@NgModule({
  declarations: [
    AutorComponent,
    SideAutorComponent,
    AgregarAutorComponent,
    BuscarAutorComponent,
    EditarAutorComponent,
    EliminarAutorComponent,
  ],
  imports: [
    CommonModule,
    AutorRoutingModule,
    AngularMaterialModule
  ]
})
export class AutorModule { }
