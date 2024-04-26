import { CategoriaModel } from './categoria.model';

export interface ItemModel {
  id: number;
  categoria: CategoriaModel;
  nome: string;
  preco: number;
}
