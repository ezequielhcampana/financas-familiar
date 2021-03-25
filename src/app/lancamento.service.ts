import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

import { Lancamento } from './lancamento/lancamento';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  url: string = environment.apiBaseUrl + "/lancamento";

  constructor(private http: HttpClient) { }

  save(lancto: Lancamento) : Observable<Lancamento> {
    return this.http.post<Lancamento>(this.url, lancto);
  }

  listagemLanctos() : Observable<Lancamento[]> {
    return this.http.get<any>(this.url + "/todos");
  }

  // listagemGeral() : Lancamento[] {
  //   return DADOS;
  // }
}

// var DADOS: Lancamento[] = [
//   {
//     "id": 1,
//     "data": "17/03/2021",
//     "origemLancto": "EMPRESA",
//     "tipoLancto": "DESPESA",
//     "historico": "Ref. a despesas gerais...",
//     "valor": "100",
//     "idFormaPagto": 1,
//     "idPlanoConta": 1
//   },
//   {
//     "id": 2,
//     "data": "17/02/2021",
//     "origemLancto": "EMPRESA",
//     "tipoLancto": "DESPESA",
//     "historico": "Ref. a despesas gerais...",
//     "valor": "200",
//     "idFormaPagto": 1,
//     "idPlanoConta": 1
//   }
// ];
