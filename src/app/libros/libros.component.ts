import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ReservaService } from '../core/services/Reserva.service';
import { Reserva } from '../core/models';

@Component({
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent {
  displayedColumns: string[] = [
    'id_reserva',
    'clase',
    'vuelo',
    'cliente',
    'hotel',
    'sucursal',
  ];

  reservas: Reserva[] = [];

  constructor(private reservaService: ReservaService) {
    this.reservaService.listarReserva().subscribe((data: Reserva[]) => {
      console.log(data);
      this.reservas = data;

      this.dataSource = new MatTableDataSource<Reserva>(this.reservas);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  dataSource = new MatTableDataSource(this.reservas);

  selection = new SelectionModel<Reserva>(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  selectHandler(row: Reserva) {
    this.selection.toggle(row as never);
  }
}
