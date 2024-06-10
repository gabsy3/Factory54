import { Component, OnInit, inject } from '@angular/core';
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


export class AppComponent implements OnInit{
  ApiService = inject(ApiService)
  displayedColumns: string[] = ['stockId', 'stockName', 'basePrice', 'askQty', 'askPrice', 'bidQty', 'bidPrice', 'lastPrice', 'lastUpdate','bidTotal','askTotal','percentageChange'];
  dataSource = this.ApiService.getData();
  
  ngOnInit(): void {
    this.dataSource = this.ApiService.calcAskTotal();
    this.dataSource = this.ApiService.calcBidTotal();
    this.dataSource = this.ApiService.calcPercentageChange();
  }
  getData() {
    this.dataSource = this.ApiService.getData();
  }
}
