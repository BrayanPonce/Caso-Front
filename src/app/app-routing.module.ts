import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNotFoundComponent } from './shared/pages/pagina-not-found/pagina-not-found.component';

const routes: Routes = [
  {
    path: 'reserva',
    loadChildren: () =>
      import('./libros/libros.module').then((m) => m.LibrosModule),
  },

  {

    path: 'autores',
    loadChildren: () =>
      import('./autor/autor.module').then((m) => m.AutorModule),

  },

  {
    path: '404', component: PaginaNotFoundComponent
  },
  {
    path: '',
    redirectTo: 'libros',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
