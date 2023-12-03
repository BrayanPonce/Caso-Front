import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models';
import { Observable, map } from 'rxjs';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  private BUSESURL = environments.baseURL + '/cliente';

  ////////////////////////////////////////////////////////

  constructor(private http: HttpClient) { }

  crearCliente (cliente: Cliente): Observable<Cliente> {

    return this.http.post<Cliente>(`${this.BUSESURL}/add`, cliente); // cambiar ruta por el backend
  }

  listarcliente (): Observable<Cliente[]> {

    return this.http.get<Cliente[]>(`${this.BUSESURL}/list`); //cambiar ruta por el back end
  }

  buscarClientePorId (id_cliente: number): Observable<Cliente> {

    const url = `${this.BUSESURL}/get/${id_cliente}`;

    return this.http.get<Cliente>(url);

  }

  editarCliente (cliente: Cliente): Observable<Cliente> {

    return this.http.put<Cliente>(this.BUSESURL, cliente);

  }

  borrarCliente (id_cliente: number): Observable<void> {

    return this.http.delete<void>(`${this.BUSESURL}/${id_cliente}`).pipe(map((res) => res));

  }

}
