import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry } from 'rxjs';
import { environment } from '../environments/environment.development';
import { handleError } from './util';
import { MesaModel } from '../models/mesa.model';

@Injectable({
  providedIn: 'root',
})
export class MesasService {
  url = environment.apiUrl + '/mesas';

  constructor(private httpClient: HttpClient) {}

  getMesas(): Observable<MesaModel[]> {
    return this.httpClient
      .get<MesaModel[]>(this.url)
      .pipe(retry(2), catchError(handleError));
  }
}
