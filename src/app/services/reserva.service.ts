import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry } from 'rxjs';
import { environment } from '../environments/environment.development';
import { PedidosModel } from '../models/pedidos.model';
import { handleError } from './util';
import { ReservaModel } from '../models/reserva.model';

@Injectable({
  providedIn: 'root',
})
export class ReservasService {
  url = environment.apiUrl + '/reservas';

  constructor(private httpClient: HttpClient) {}

  fecharReserva(idReserva: number): Observable<ReservaModel> {
    return this.httpClient
      .post<ReservaModel>(this.url + '/fecharReserva/' + idReserva, {})
      .pipe(retry(2), catchError(handleError));
  }
}
