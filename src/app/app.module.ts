import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule} from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContatoComponent } from './contato/contato.component';
import { ContatoDetalheComponent } from './contato-detalhe/contato-detalhe.component';
import { ConfirmaExclusaoFormaPagto, FormaPagtoComponent } from './forma-pagto/forma-pagto.component';
import { ContatoService } from './contato.service';

import { AberturaComponent } from './abertura/abertura.component';
import { ConfirmaExclusao, PlanoContaComponent } from './plano-conta/plano-conta.component';
import { LancamentoComponent } from './lancamento/lancamento.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';


import { RedDirective } from './diretivas/red.directive';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProdutosCriarComponent } from './produtos/produtos-criar/produtos-criar.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AberturaComponent,
    ContatoComponent,
    ContatoDetalheComponent,
    FormaPagtoComponent,
    ConfirmaExclusaoFormaPagto,
    PlanoContaComponent,
    ConfirmaExclusao,
    LancamentoComponent,
    FooterComponent,
    NavComponent,
    RedDirective,
    HomeComponent,
    ProductCrudComponent,
    ProdutosCriarComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatSnackBarModule,    
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    ContatoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
