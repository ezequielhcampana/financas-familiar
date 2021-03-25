import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProdutosCriarComponent } from './produtos/produtos-criar/produtos-criar.component';
import { FormaPagtoComponent } from './forma-pagto/forma-pagto.component';
import { PlanoContaComponent } from './plano-conta/plano-conta.component';
import { LancamentoComponent } from './lancamento/lancamento.component';

const routes: Routes = [
  { path: "",  component: HomeComponent },
  { path: "products", component: ProductCrudComponent },
  { path: "produtos/criar", component: ProdutosCriarComponent },
  { path: "contatos", component: ContatoComponent },
  { path: "formaPagamento", component: FormaPagtoComponent },
  { path: "planoContas", component: PlanoContaComponent },
  { path: "lancamentos", component: LancamentoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
