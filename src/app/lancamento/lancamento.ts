import { FormaPagto } from "../forma-pagto/formaPagto";
import { PlanoConta } from "../plano-conta/planoConta";

export class Lancamento{
    id?: number;
    data: string;
    origemLancto: string;
    tipoLancto: string;
    historico: string;
    planoConta: PlanoConta;
    valor: string;
    formaPagto: FormaPagto;

    constructor(
        data: string, 
        origemLancto: string, 
        tipoLancto: string, 
        historico: string,
        planoConta: PlanoConta,        
        valor: string,
        formaPagto: FormaPagto,
        
    ) {
        this.data = data;
        this.origemLancto = origemLancto;
        this.tipoLancto = tipoLancto;
        this.historico = historico;
        this.planoConta = planoConta;
        this.valor = valor;
        this.formaPagto = formaPagto;
    }
}