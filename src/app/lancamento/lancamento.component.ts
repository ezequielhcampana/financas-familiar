import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormaPagtoService } from '../forma-pagto.service';
import { FormaPagto } from '../forma-pagto/formaPagto';
import { LancamentoService } from '../lancamento.service';
import { PlanoContaService } from '../plano-conta.service';
import { PlanoConta } from '../plano-conta/planoConta';
import { Lancamento } from './lancamento';

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})
export class LancamentoComponent implements OnInit {

  formLancto: FormGroup;

  lstPlanoContas: PlanoConta[] = [];
  lstFormasPagto: FormaPagto[] = [];
  lancamentos: Lancamento[] = [];
  
  colunas = ['data', 'origemLancto', 'tipoLancto', 'historico', 'valor', 'formaPagto.descricaoForma', 'planoConta.descricaoPlano', 'btnEditar', 'btnExcluir'];

  constructor(
    private formaPagtoService: FormaPagtoService,
    private planoContaService: PlanoContaService,
    private lanctoService: LancamentoService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.preparaForm();
    this.listarLanctos();

    this.popularComboFormaPagto();
    this.popularComboPlanoConta();
  }

  popularComboFormaPagto() {
    this.formaPagtoService
      .list()
      .subscribe(resposta => this.lstFormasPagto = resposta);
  }

  popularComboPlanoConta() {
    this.planoContaService
      .list()
      .subscribe(resposta => this.lstPlanoContas = resposta);
  }

  preparaForm() {
    this.formLancto = this.fb.group({
      data: ['', Validators.required],
      origemLancto: ['', Validators.required],
      tipoLancto: ['', Validators.required],
      historico: ['', Validators.required],
      idPlanoConta: [0, Validators.required],
      valor: ['', Validators.required],
      idFormaPagto: [0, Validators.required],      
    });
  }

  listarLanctos() {
    this.lanctoService.listagemLanctos().subscribe(response => {
      this.lancamentos = response;
    });
  }

  submit() {

    const formValues = this.formLancto.value;

    const fp: FormaPagto = new FormaPagto(formValues.idFormaPagto, '');
    const pc: PlanoConta = new PlanoConta(formValues.idPlanoConta, '', '');

    const lancto: Lancamento = new Lancamento(
      formValues.data, formValues.origemLancto, formValues.tipoLancto, formValues.historico, pc, formValues.valor, fp
    );

    // const lancto: Lancamento = new Lancamento(
    //   formValues.data, formValues.origemLancto, formValues.tipoLancto,
    //   formValues.historico, formValues.idFormaPagto, formValues.valor, formValues.idPlanoConta
    // );

    //alert('testes1: \n\n' + JSON.stringify(this.formLancto.value, null, 4));

    this.lanctoService
      .save(lancto)
      .subscribe(resposta => {
        let listaAtualizada: Lancamento[] = [...this.lancamentos, resposta];
        this.lancamentos = listaAtualizada;
      }); 
  }

}
