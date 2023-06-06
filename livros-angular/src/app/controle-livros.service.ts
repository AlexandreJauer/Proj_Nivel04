import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable()
export class ControleLivrosService {
  livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Livro 1',
      resumo: 'Resumo do Livro 1',
      autores: ['Autor 1', 'Autor 2']
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Livro 2',
      resumo: 'Resumo do Livro 2',
      autores: ['Autor 3', 'Autor 4']
    },
    {
      codigo: 3,
      codEditora: 1,
      titulo: 'Livro 3',
      resumo: 'Resumo do Livro 3',
      autores: ['Autor 5']
    }
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = this.obterProximoCodigo();
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex(livro => livro.codigo === codigo);
    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }

  private obterProximoCodigo(): number {
    let maxCodigo = 0;
    for (const livro of this.livros) {
      if (livro.codigo > maxCodigo) {
        maxCodigo = livro.codigo;
      }
    }
    return maxCodigo + 1;
  }
}
