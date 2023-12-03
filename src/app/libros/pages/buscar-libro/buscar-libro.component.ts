import { Component } from '@angular/core';
import { Libros } from '../../../core/models/interfaces/Libro.interface';
import { LibroService } from '../../../core/services/libro.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar-libro',
  templateUrl: './buscar-libro.component.html',
  styleUrls: ['./buscar-libro.component.css'],
})
export class BuscarLibroComponent {
  libros!: Libros;
  libroId!: number;

  constructor(
    private libroServicio: LibroService,
    private route: ActivatedRoute
  ) {
    this.libroId = parseInt(this.route.snapshot.paramMap.get('id_libro') || '');

    this.libroServicio
      .obtenerLibroPorId(this.libroId)
      .subscribe((data: Libros) => {
        this.libros = data;
      });
  }
}
