export class FormaPagto {
    id?: number;
    descricaoForma: string;

    constructor(id: number,  descricaoForma: string) {
        this.id = id;
        this.descricaoForma = descricaoForma;
    }
}