import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentsProduct } from 'src/environments/environments.product';
import { Reserva } from '../models';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {


  private BUSESURL = EnvironmentsProduct.baseURL + '/reserva';

  ////////////////////////////////////////////////////////

  constructor(private http: HttpClient) { }

  crearReserva (reserva: Reserva): Observable<Reserva> {

    return this.http.post<Reserva>(`${this.BUSESURL}/add`, reserva); // cambiar ruta por el backend
  }

  listarReserva (): Observable<Reserva[]> {

    return this.http.get<Reserva[]>(`${this.BUSESURL}/list`); //cambiar ruta por el back end
  }

  buscarReservaPorId (id_reserva: number): Observable<Reserva> {

    const url = `${this.BUSESURL}/get/${id_reserva}`;

    return this.http.get<Reserva>(url);

  }

  editarReserva (reserva: Reserva): Observable<Reserva> {

    return this.http.put<Reserva>(this.BUSESURL, reserva);

  }

  borrarReserva (id_reserva: number): Observable<void> {

    return this.http.delete<void>(`${this.BUSESURL}/${id_reserva}`).pipe(map((res) => res));

  }
}
