import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Autores } from '../core/models/interfaces/Autor.interface';
import { AutorService } from '../core/services/autor.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css'],
})
export class AutorComponent {
  displayedColumns: string[] = ['id_autor', 'autor'];

  autores: Autores[] = [];

  constructor(private AUTORESSERVICE: AutorService) {
    this.AUTORESSERVICE.listarAutores().subscribe((data: Autores[]) => {
      console.log(data);
      this.autores = data;

      this.dataSource = new MatTableDataSource<Autores>(this.autores);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  dataSource = new MatTableDataSource(this.autores);

  selection = new SelectionModel<Autores>(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  selectHandler(row: Autores) {
    this.selection.toggle(row as never);
  }
}
