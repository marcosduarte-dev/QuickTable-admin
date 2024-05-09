import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { MesaModel } from '../../models/mesa.model';
import { CommonModule } from '@angular/common';
import { MesasService } from '../../services/mesas.service';
import { PedidosModel } from '../../models/pedidos.model';
import { PedidosService } from '../../services/pedidos.service';
import { ConfirmationService } from 'primeng/api';
import { PagamentoCustomizadoModel } from '../../models/pagamentoCustomizado';
import { ReservasService } from '../../services/reserva.service';

@Component({
  selector: 'app-mesas',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './mesas.component.html',
  styleUrl: './mesas.component.css',
})
export class MesasComponent implements OnInit {
  ngOnInit(): void {
    this.getMesas();
  }

  constructor(
    private mesaService: MesasService,
    private pedidosService: PedidosService,
    private reservaService: ReservasService,
    private confirmationService: ConfirmationService
  ) {}

  list: MesaModel[] = [];
  pedidos: PedidosModel[] = [];
  listaPagamentoCustomizado: PagamentoCustomizadoModel[] = [];
  separado: { [key: string]: number } = {};
  stringNome: string = '';
  idReserva: number = 0;
  dialogLoaded: boolean = false;

  getMesas() {
    this.mesaService.getMesas().subscribe((mesas: MesaModel[]) => {
      this.list = mesas;
    });
  }

  fecharReserva(idReserva: number) {
    this.reservaService.fecharReserva(idReserva).subscribe(() => {
      // Enviar uma notificação para o cliente
    });
  }

  getPedidosPeloIdReserva(idReservaAtiva: number) {
    this.pedidosService
      .getByIdReserva(idReservaAtiva)
      .subscribe((pedidos: PedidosModel[]) => {
        this.pedidos = pedidos;
        this.calculandoDivisao(pedidos);
      });
  }

  visible: boolean = false;

  header: string = '';

  showDialog(mesa: MesaModel) {
    this.dialogLoaded = false;
    this.pedidos = [];
    this.header = mesa.titulo;
    this.visible = true;
    this.idReserva = mesa.idReservaAtiva;
    this.getPedidosPeloIdReserva(mesa.idReservaAtiva);
  }

  calculandoDivisao(pedidos: PedidosModel[]) {
    this.listaPagamentoCustomizado = [];
    for (const pedido of pedidos) {
      const pagamentoEncontrado = this.listaPagamentoCustomizado.find(
        (pagamento) => pagamento.nome === pedido.nome_cliente
      );

      if (pagamentoEncontrado) {
        pagamentoEncontrado.valorFinal += pedido.totalPedido;
      } else {
        this.listaPagamentoCustomizado.push({
          nome: pedido.nome_cliente,
          valorFinal: pedido.totalPedido,
        });
      }
    }
    this.dialogLoaded = true;
  }

  pagamentoParticionado() {}
  pagamentoCustomizado() {
    this.confirmationService.confirm({
      header: 'Pagamento Customizado',
      message: this.stringNome,
      acceptIcon: 'pi pi-check mr-2',
      acceptLabel: 'Pago',
      rejectLabel: 'Cancelar',
      rejectIcon: 'pi pi-times mr-2',
      rejectButtonStyleClass: 'p-button-sm',
      acceptButtonStyleClass: 'p-button-outlined p-button-sm',
      accept: () => {
        this.fecharReserva(this.idReserva);
      },
      reject: () => {},
    });
  }
}
