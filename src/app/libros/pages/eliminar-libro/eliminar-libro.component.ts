import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from '../../../core/services/libro.service';

@Component({
  selector: 'app-eliminar-libro',
  templateUrl: './eliminar-libro.component.html',
  styleUrls: ['./eliminar-libro.component.css'],
})
export class EliminarLibroComponent {
  libroId!: number;

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private libroServicio: LibroService
  ) {
    this.libroId = parseInt(this.router.snapshot.paramMap.get('id_libro') || '');

    this.libroServicio.borrarLibro(this.libroId).subscribe((data) => {
      alert('libro borrado');
      this.route.navigate(['/libros']);
    });


  }

}

