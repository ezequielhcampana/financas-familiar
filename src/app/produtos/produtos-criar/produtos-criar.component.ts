import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/produto.service';
import { Router } from '@angular/router';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-produtos-criar',
  templateUrl: './produtos-criar.component.html',
  styleUrls: ['./produtos-criar.component.css']
})
export class ProdutosCriarComponent implements OnInit {

  produto: Produto = {
    nome: 'Produto de teste',
    preco: 125.98
  }

  constructor(
    private serviceProduto: ProdutoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.serviceProduto.create(this.produto).subscribe(() => {
      this.serviceProduto.showMessage('Produto criado');
      this.router.navigate(['/products']);
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
