import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DropdownModule } from 'primeng/dropdown';
import { TreeTableModule } from 'primeng/treetable';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { HttpClientModule } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { PedidosService } from './services/pedidos.service';

@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    SidebarModule,
    ButtonModule,
    TableModule,
    TagModule,
    ToastModule,
    ToolbarModule,
    ConfirmDialogModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    ColorPickerModule,
    DropdownModule,
    TreeTableModule,
    CardModule,
    AccordionModule,
    ProgressSpinnerModule,
  ],
  declarations: [],
  exports: [
    FormsModule,
    SidebarModule,
    ButtonModule,
    TableModule,
    TagModule,
    ToastModule,
    ToolbarModule,
    ConfirmDialogModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    ColorPickerModule,
    DropdownModule,
    TreeTableModule,
    CardModule,
    AccordionModule,
    ProgressSpinnerModule,
  ],
  providers: [MessageService, ConfirmationService, PedidosService],
})
export class SharedModule {}
