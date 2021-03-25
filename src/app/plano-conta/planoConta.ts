export class PlanoConta {
    id?: number;
    descricaoPlano?: string;
    tpConta?: string;

    constructor(id: number, descricaoPlano: string, tpConta: string) {
        this.id = id;
        this.descricaoPlano = descricaoPlano;
        this.tpConta = tpConta;
    }

}