import { MesaModel } from './mesa.model';

export interface ReservaModel {
  id: number;
  mesa: MesaModel;
  qtde_participantes: number;
  total_gasto: number;
  data_abertura: number[];
  data_fechamento: number[];
}
