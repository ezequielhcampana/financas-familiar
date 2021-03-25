import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { FormaPagto } from './forma-pagto/formaPagto';

@Injectable({
  providedIn: 'root'
})
export class FormaPagtoService {

  url: string = environment.apiBaseUrl + "formapagto";

  constructor(
    private http: HttpClient
  ) { }

  save(formaPagto: FormaPagto) : Observable<FormaPagto> {
    return this.http.post<FormaPagto>(this.url, formaPagto);
  }

  list() : Observable<FormaPagto[]> {
    return this.http.get<any>(this.url);
  }

  excluir(id: Number) {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
