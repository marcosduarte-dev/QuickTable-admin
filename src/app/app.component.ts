import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { SharedModule } from './shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  sidebarVisible: boolean = true;
  sidebarModal: boolean = false;
  title: string;

  constructor(private router: Router, private location: Location) {
    this.title = 'Timer';

    if (this.location.path().includes('cliente')) {
      this.sidebarVisible = false;
    } else {
      this.sidebarVisible = true;
    }
  }
  ngOnInit(): void {}

  navigate(destination: string) {
    switch (destination) {
      case 'pedidos':
        this.router.navigate(['/admin/pedidos']);
        break;
      case 'mesas':
        this.router.navigate(['/admin/mesas']);
        break;
      default:
        break;
    }
  }
}
