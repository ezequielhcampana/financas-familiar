import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormaPagtoService } from '../forma-pagto.service';
import { FormaPagto } from './formaPagto';

export interface DialogData {
  descr: string;
  resposta: string;
}

@Component({
  selector: 'app-forma-pagto',
  templateUrl: './forma-pagto.component.html',
  styleUrls: ['./forma-pagto.component.css']
})
export class FormaPagtoComponent implements OnInit {

  descr: string;
  resposta: boolean = false;

  formFormaPagto: FormGroup;
  formasPagtos: FormaPagto[] = [];
  colunas = ['id', 'descricaoForma', 'btnEditar', 'btnExcluir'];

  constructor(
    private service: FormaPagtoService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.montarFormulario();
    this.listarFormaPagtos();
  }

  montarFormulario() {
    this.formFormaPagto = this.fb.group({
      descricaoForma: ['', Validators.required]
    });
  }

  listarFormaPagtos() {
    this.service.list().subscribe(resposta => {
      this.formasPagtos = resposta;
    })
  }

  submit() {
    const formValues = this.formFormaPagto.value;
    const formaPagto: FormaPagto = new FormaPagto(0, formValues.descricaoForma);

    this.service.save(formaPagto).subscribe(resposta => {
      this.formasPagtos.push(resposta);
      console.log(this.formasPagtos);
    })
  }

  openDialogExcluir(fp: FormaPagto): void {
    const dialogRef = this.dialog.open(
      ConfirmaExclusaoFormaPagto, {
        width: '250px',
        data: { descr: fp.descricaoForma, resposta: this.resposta }
      });

    dialogRef.afterClosed().subscribe(result => {
      this.resposta = result;
      console.log('resposta:' + this.resposta);
      if(this.resposta) {
        //console.log("entrou no bloco do excluir: " + fp.id);
        this.service.excluir(fp.id).subscribe(resposta => {
          this.listarFormaPagtos();
        });

      }
    })
  }

}

@Component({
  selector: "./confirma-exclusao-forma-pagto",
  templateUrl: "./confirma-exclusao-forma-pagto.component.html"
})
export class ConfirmaExclusaoFormaPagto {

  constructor(
    public dialogRef: MatDialogRef<ConfirmaExclusaoFormaPagto>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

}
