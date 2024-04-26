import { ItemModel } from './item.model';
import { ReservaModel } from './reserva.model';

export interface ItemQuantidadeModel {
  id: number;
  item: ItemModel;
  quantidade: number;
}
