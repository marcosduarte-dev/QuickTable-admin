import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { PedidosModel } from '../../models/pedidos.model';
import { PedidosService } from '../../services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css',
})
export class PedidosComponent implements OnInit {
  ngOnInit(): void {
    this.getProjects();
  }

  constructor(private pedidoService: PedidosService) {}

  list: PedidosModel[] = [];
  getProjects() {
    this.pedidoService
      .getPedidosAndamento()
      .subscribe((pedidos: PedidosModel[]) => {
        this.list = pedidos;
      });
  }

  fecharPedido(idPedido: number) {
    this.pedidoService
      .fecharPedido(idPedido)
      .subscribe((pedidos: PedidosModel) => {
        console.log(pedidos + 'Fechado!');
        this.getProjects();
      });
  }
}
