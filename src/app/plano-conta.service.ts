import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlanoConta } from './plano-conta/planoConta';

@Injectable({
  providedIn: 'root'
})
export class PlanoContaService {

  url: string = environment.apiBaseUrl + "planoconta";

  constructor(
    private http: HttpClient
  ) { }

  save(pc: PlanoConta) : Observable<PlanoConta> {
    return this.http.post<PlanoConta>(this.url, pc);
  }

  list() : Observable<PlanoConta[]> {
    return this.http.get<any>(this.url);
  }

  update(pc: PlanoConta) : Observable<PlanoConta> {
    return this.http.put<PlanoConta>(this.url, pc);
  }

  excluir(id: Number) : Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }

}
