import { Routes } from '@angular/router';
import { MesasComponent } from './admin/mesas/mesas.component';
import { PedidosComponent } from './admin/pedidos/pedidos.component';

export const routes: Routes = [
  { path: 'admin/mesas', component: MesasComponent },
  { path: 'admin/pedidos', component: PedidosComponent },
];
