import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from './services/api.service';







@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTableModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  ApiService = inject(ApiService)
  displayedColumns: string[] = ['stockId', 'stockName', 'basePrice', 'askQty', 'askPrice', 'bidQty', 'bidPrice', 'lastPrice', 'lastUpdate'];
  dataSource = this.ApiService.getData();
  getData() {
    this.dataSource = this.ApiService.getData();
  }
}
