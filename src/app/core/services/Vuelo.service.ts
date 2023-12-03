import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Vuelo } from '../models';
import { Observable, map } from 'rxjs';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  private BUSESURL = environments.baseURL + '/vuelo';

  ////////////////////////////////////////////////////////

  constructor(private http: HttpClient) { }

  crearVuelo (vuelo: Vuelo): Observable<Vuelo> {

    return this.http.post<Vuelo>(`${this.BUSESURL}/add`, vuelo); // cambiar ruta por el backend
  }

  listarVuelos (): Observable<Vuelo[]> {

    return this.http.get<Vuelo[]>(`${this.BUSESURL}/list`); //cambiar ruta por el back end
  }

  buscarVueloPorId (id: number): Observable<Vuelo> {

    const url = `${this.BUSESURL}/get/${id}`;

    return this.http.get<Vuelo>(url);

  }

  editarVuelo (vuelo: Vuelo): Observable<Vuelo> {

    const url = `${this.BUSESURL}/update`;

    return this.http.put<Vuelo>(url, vuelo);

  }

  borrarVuelo (id: number): Observable<void> {

    const url = `${this.BUSESURL}/delete/${id}`;

    return this.http.delete<void>(url).pipe(map((res) => res));

  }


}
