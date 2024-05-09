import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry } from 'rxjs';
import { environment } from '../environments/environment.development';
import { PedidosModel } from '../models/pedidos.model';
import { handleError } from './util';

@Injectable({
  providedIn: 'root',
})
export class PedidosService {
  url = environment.apiUrl + '/pedidos';

  constructor(private httpClient: HttpClient) {}

  getPedidosAndamento(): Observable<PedidosModel[]> {
    return this.httpClient
      .get<PedidosModel[]>(this.url + '/status/andamento')
      .pipe(retry(2), catchError(handleError));
  }
  fecharPedido(idPedido: number): Observable<PedidosModel> {
    return this.httpClient
      .post<PedidosModel>(this.url + '/fecharPedido/' + idPedido, {})
      .pipe(retry(2), catchError(handleError));
  }

  getByIdReserva(idReserva: number): Observable<PedidosModel[]> {
    return this.httpClient
      .get<PedidosModel[]>(this.url + '/reserva/' + idReserva)
      .pipe(retry(2), catchError(handleError));
  }
}
