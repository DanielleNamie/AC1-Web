import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  standalone: false,
  templateUrl: './apolice.html',
  styleUrl: './apolice.css'
})
export class Apolice {
  nome: string = '';
  sexo: string = 'masculino';
  idade: number = 0;
  valorAuto: number = 0;
  valorApolice: number | null = null;

  calcular() {
    if (this.sexo === 'masculino' && this.idade <= 25) {
      this.valorApolice = this.valorAuto * 0.15;
    } else if (this.sexo === 'masculino' && this.idade > 25) {
      this.valorApolice = this.valorAuto * 0.10;
    } else {
      this.valorApolice = this.valorAuto * 0.08;
    }
  }
}
