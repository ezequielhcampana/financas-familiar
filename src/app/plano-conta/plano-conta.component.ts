import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { PlanoContaService } from '../plano-conta.service';
import { PlanoConta } from './planoConta';

export interface DialogData {
  descr: string;
  resposta: boolean;
}

@Component({
  selector: 'app-plano-conta',
  templateUrl: './plano-conta.component.html',
  styleUrls: ['./plano-conta.component.css']
})
export class PlanoContaComponent implements OnInit {

  descr: string;
  resposta: boolean = false;

  formPlanoConta: FormGroup;
  planoContas: PlanoConta[] = [];
  colunas = ["id", "descricaoPlano", "tpConta", 'btnEditar', 'btnExcluir'];

  constructor(
    private service: PlanoContaService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.montaFormulario();
    this.listarPlanosContas();
  }

  montaFormulario() {
    this.formPlanoConta = this.fb.group({
      descricaoPlano: ['', Validators.required],
      tpConta: ['', Validators.required]
    })
  }

  listarPlanosContas() {
    this.service.list().subscribe(
      resposta => {
        this.planoContas = resposta;
      }
    )
  }

  submit() {
    const formValues = this.formPlanoConta.value;
    const pc: PlanoConta = new PlanoConta(0, formValues.descricaoPlano, formValues.tpConta);
    this.service.save(pc).subscribe(resposta =>{
      let listaAtualizada: PlanoConta[] = [...this.planoContas, resposta];
      this.planoContas = listaAtualizada;
      console.log(this.planoContas);
    })
  }

  openDialogExcluir(pc: PlanoConta): void {
    const dialogRef = this.dialog.open(
      ConfirmaExclusao, {
        width: '300px',
        data: {descr: pc.descricaoPlano, resposta: this.resposta}
      });

    dialogRef.afterClosed().subscribe(result => {
      this.resposta = result;  
      console.log('resposta: ' + this.resposta);   
      if(this.resposta) {
        //console.log("entrou no bloco do excluir: " + pc.id);
        this.service.excluir(pc.id).subscribe(resposta => {
          this.listarPlanosContas();
        })
      } 
    });
  }
}

@Component({
  selector: './confirma-exclusao',
  templateUrl: './confirma-exclusao.component.html'
})
export class ConfirmaExclusao {
  
  constructor(
    public dialogRef: MatDialogRef<ConfirmaExclusao>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
    this.data.resposta = false;
  }
}
