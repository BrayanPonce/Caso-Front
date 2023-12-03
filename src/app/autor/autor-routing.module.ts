import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorComponent } from './autor.component';
import { AgregarAutorComponent } from './pages/agregar-autor/agregar-autor.component';
import { BuscarAutorComponent } from './pages/buscar-autor/buscar-autor.component';
import { EditarAutorComponent } from './pages/editar-autor/editar-autor.component';
import { EliminarAutorComponent } from './pages/eliminar-autor/eliminar-autor.component';
import { PaginaNotFoundComponent } from '../shared/pages/pagina-not-found/pagina-not-found.component';

const routes: Routes = [

  { path: '', component: AutorComponent },
  { path: 'agregar-autor', component: AgregarAutorComponent },
  { path: 'buscar-autor/:id', component: BuscarAutorComponent },
  { path: 'editar-autor/:id', component: EditarAutorComponent },
  { path: 'eliminar-autor/:id', component: EliminarAutorComponent },
  { path: '**', component: PaginaNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutorRoutingModule { }
