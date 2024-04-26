import { ItemQuantidadeModel } from './item.quantidade.model';
import { ReservaModel } from './reserva.model';

export interface PedidosModel {
  id: number;
  itemQuantidade: ItemQuantidadeModel[];
  reserva: ReservaModel;
  totalPedido: number;
  nome_cliente: string;
  status: string;
}
