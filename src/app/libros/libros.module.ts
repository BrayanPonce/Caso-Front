import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { AngularMaterialModule } from '../angular/Angular-Material.module';

import { EliminarLibroComponent } from './pages/eliminar-libro/eliminar-libro.component';
import { EditarLibroComponent } from './pages/editar-libro/editar-libro.component';
import { LibrosComponent } from './libros.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AgregarLibroComponent } from './pages/agregar-libro/agregar-libro.component';
import { BuscarLibroComponent } from './pages/buscar-libro/buscar-libro.component';

@NgModule({
  declarations: [
    AgregarLibroComponent,
    EliminarLibroComponent,
    EditarLibroComponent,
    LibrosComponent,
    SidebarComponent,
    BuscarLibroComponent
  ],
  imports: [
    CommonModule,
    LibrosRoutingModule,
    AngularMaterialModule,

  ],
  exports: [
      SidebarComponent
  ]
})
export class LibrosModule {}
