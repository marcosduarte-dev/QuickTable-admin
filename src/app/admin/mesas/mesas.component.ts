import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { MesaModel } from '../../models/mesa.model';
import { CommonModule } from '@angular/common';
import { MesasService } from '../../services/mesas.service';

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

  constructor(private mesaService: MesasService) {}

  list: MesaModel[] = [];
  getMesas() {
    this.mesaService.getMesas().subscribe((mesas: MesaModel[]) => {
      this.list = mesas;
    });
  }
}
