import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from '../../../core/services/libro.service';
import { Libros } from '../../../core/models/interfaces/Libro.interface';
import { AutorService } from '../../../core/services/autor.service';
import { CategoriaService } from '../../../core/services/categoria.service';
import { EditorialService } from '../../../core/services/editorial.service';
import { Autores } from '../../../core/models/interfaces/Autor.interface';
import { Categorias } from '../../../core/models/interfaces/Categoria.interface';
import { Editoriales } from '../../../core/models/interfaces/Editorial.interface';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css'],
})
export class EditarLibroComponent implements OnInit {
  libro: Libros = {
    titulo: '',
    idioma: '',
    descripcion: '',
    portada: '',
    fecha_lanza: new Date(),
    paginas: 0,
    autor: {
      id_autor: 0,
      autor: '',
    },
    categoria: {
      id_categoria: 0,
      categoria: '',
    },
    editorial: {
      id_editorial: 0,
      editorial: '',
    },
  };

  ListAutores: Autores[] = [];

  ListCategorias: Categorias[] = [];

  ListEditoriales: Editoriales[] = [];

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private LIBROSERVICE: LibroService,
    private autorService: AutorService,
    private categoriaService: CategoriaService,
    private editorialService: EditorialService
  ) {
    this.autorService.listarAutores().subscribe((autor) => {
      this.ListAutores = autor;
    });

    this.categoriaService.listarCategorias().subscribe((categoria) => {
      this.ListCategorias = categoria;
    });

    this.editorialService.listarEditoriales().subscribe((editorial) => {
      this.ListEditoriales = editorial;
    });
  }
  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.activatedRouter.params.subscribe((params) => {
      const id = params['id_libro'];
      if (id) {
        this.LIBROSERVICE.obtenerLibroPorId(id).subscribe(
          (libro) => {
            if (libro) {
              this.libro = libro;
            } else {
              console.error(`No se encontró ningún libro con el ID: ${id}`);
            }
          },
          (error) => {
            console.error(`Error al obtener el libro: ${error}`);
          }
        );
      }
    });
  }

  Actualizar(): void {
    this.LIBROSERVICE.actualizarLibro(this.libro).subscribe((l) =>
      this.router.navigate(['/libros'])
    );
  }
}
