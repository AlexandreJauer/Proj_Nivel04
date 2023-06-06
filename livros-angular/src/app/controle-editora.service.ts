import { Injectable } from '@angular/core';

interface Editora {
  codEditora: number;
  nome: string;
}

@Injectable()
export class ControleEditoraService {
  private editoras: Editora[] = [
    { codEditora: 1, nome: 'Editora A' },
    { codEditora: 2, nome: 'Editora B' },
    { codEditora: 3, nome: 'Editora C' }
  ];

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : '';
  }
  getEditoras(): Editora[] {
    return this.editoras;
  }

 
}
