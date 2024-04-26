import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inicial',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './inicial.component.html',
  styleUrl: './inicial.component.css',
})
export class InicialComponent implements OnInit {
  nome: string = '';
  mesa: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.mesa = this.route.snapshot.params['mesa'];

    const dados = localStorage.getItem('dados');
    const data = dados ? JSON.parse(dados) : null;
    const dataAtualizacao = Number(localStorage.getItem('dataAtualizacao'));
    const seisHorasEmMilissegundos = 6 * 60 * 60 * 1000;

    if (
      data &&
      dataAtualizacao &&
      new Date().getTime() - dataAtualizacao < seisHorasEmMilissegundos
    ) {
      this.router.navigate(['/cliente/cardapio']);
    }
  }
  acessar() {
    const info = { mesa: this.mesa, nome: this.nome };
    const dataAtualizacao2 = new Date().getTime();

    localStorage.setItem('dados', JSON.stringify(info));
    localStorage.setItem('dataAtualizacao', dataAtualizacao2.toString());

    this.router.navigate(['/cliente/cardapio']);
  }
}
