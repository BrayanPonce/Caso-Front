import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarLibroComponent } from './pages/agregar-libro/agregar-libro.component';
import { EliminarLibroComponent } from './pages/eliminar-libro/eliminar-libro.component';
import { PaginaNotFoundComponent } from '../shared/pages/pagina-not-found/pagina-not-found.component';
import { LibrosComponent } from './libros.component';
import { BuscarLibroComponent } from './pages/buscar-libro/buscar-libro.component';
import { EditarLibroComponent } from './pages/editar-libro/editar-libro.component';

const routes: Routes = [

  { path: '', component: LibrosComponent },
  { path: 'agregar-reserva', component: AgregarLibroComponent },
  { path: 'buscar-reserva/:id_reserva', component: BuscarLibroComponent },
  { path: 'editar-reserva/:id_reserva', component: EditarLibroComponent },
  { path: 'eliminar-reserva/:id_reserva', component: EliminarLibroComponent },
  { path: '**', component: PaginaNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibrosRoutingModule {}
