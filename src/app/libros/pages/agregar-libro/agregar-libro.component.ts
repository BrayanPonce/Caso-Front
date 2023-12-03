import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AutorService } from '../../../core/services/autor.service';
import { CategoriaService } from '../../../core/services/categoria.service';
import { EditorialService } from '../../../core/services/editorial.service';

import { Libros } from '../../../core/models/interfaces/Libro.interface';
import { Autores } from '../../../core/models/interfaces/Autor.interface';
import { Categorias } from '../../../core/models/interfaces/Categoria.interface';
import { Editoriales } from '../../../core/models/interfaces/Editorial.interface';
import { LibroService } from '../../../core/services/libro.service';
import { ClienteService } from 'src/app/core/services/Cliente.service';

@Component({
  selector: 'app-agregar-libro',
  templateUrl: './agregar-libro.component.html',
  styleUrls: ['./agregar-libro.component.css'],
})
export class AgregarLibroComponent implements OnInit {
  nuevoLibro: Libros = {
    id_LIBRO: undefined,
    titulo: '',
    fecha_lanza: new Date(),
    idioma: '',
    paginas: 0,
    descripcion: '',
    portada: '',
    autor: {
      id_autor: undefined,
      autor: '',
    },
    categoria: {
      id_categoria: undefined,
      categoria: '',
    },
    editorial: {
      id_editorial: undefined,
      editorial: '',
    },
  };

  ///////////////////////////////////////

  ListAutores: Autores[] = [];

  ListCategorias: Categorias[] = [];

  ListEditoriales: Editoriales[] = [];

  constructor(
    private clienteService: ClienteService,
    private vueloService: VueloSer,
    private editorialService: EditorialService,
    private libroService: LibroService,
    private router: Router
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

  ///////////////////////////////////////

  guardarLibro() {
    console.log('Guardar Libro');
    this.libroService.crearLibro(this.nuevoLibro).subscribe((libro) => {
      alert('Libro Creado');
      this.router.navigate(['/libros']);
    });
  }

  ngOnInit(): void {
    this.guardarLibro();
  }
}
