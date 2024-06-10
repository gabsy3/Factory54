import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';


export interface modelData {
  stockId: number;
  stockName: string;
  basePrice: number;
  askQty: number;
  askPrice: number;
  bidQty: number;
  bidPrice: number;
  lastPrice:number;
  lastUpdate: Date;
}

const ELEMENT_DATA: modelData[] = [
  { stockId: 1000, stockName: 'Hydrogen', basePrice: 10, askQty: 1.0079, askPrice: 1, bidQty: 1, bidPrice: 12, lastPrice:20,lastUpdate: new Date('3/14/2021 09:35:53 AM') },
  { stockId: 1001, stockName: 'Hydrogen', basePrice: 10, askQty: 1.0079, askPrice: 1, bidQty: 1, bidPrice: 12, lastPrice:20,lastUpdate: new Date('3/14/2021 09:35:53 AM') },
  { stockId: 1002, stockName: 'Hydrogen', basePrice: 10, askQty: 1.0079, askPrice: 1, bidQty: 1, bidPrice: 12, lastPrice:20,lastUpdate: new Date('3/14/2021 09:35:53 AM') },
  { stockId: 1003, stockName: 'Hydrogen', basePrice: 10, askQty: 1.0079, askPrice: 1, bidQty: 1, bidPrice: 12, lastPrice:20,lastUpdate: new Date('3/14/2021 09:35:53 AM') },
  { stockId: 1004, stockName: 'Hydrogen', basePrice: 10, askQty: 1.0079, askPrice: 1, bidQty: 1, bidPrice: 12, lastPrice:20,lastUpdate: new Date('3/14/2021 09:35:53 AM') },
  { stockId: 1005, stockName: 'Hydrogen', basePrice: 10, askQty: 1.0079, askPrice: 1, bidQty: 1, bidPrice: 12, lastPrice:20,lastUpdate: new Date('3/14/2021 09:35:53 AM') },
  { stockId: 1006, stockName: 'Hydrogen', basePrice: 10, askQty: 1.0079, askPrice: 1, bidQty: 1, bidPrice: 12, lastPrice:20,lastUpdate: new Date('3/14/2021 09:35:53 AM') },
  { stockId: 1007, stockName: 'Hydrogen', basePrice: 10, askQty: 1.0079, askPrice: 1, bidQty: 1, bidPrice: 12, lastPrice:20,lastUpdate: new Date('3/14/2021 09:35:53 AM') },
  { stockId: 1008, stockName: 'Hydrogen', basePrice: 10, askQty: 1.0079, askPrice: 1, bidQty: 1, bidPrice: 12, lastPrice:20,lastUpdate: new Date('3/14/2021 09:35:53 AM') },
  { stockId: 1009, stockName: 'Hydrogen', basePrice: 10, askQty: 1.0079, askPrice: 1, bidQty: 1, bidPrice: 12, lastPrice:20,lastUpdate: new Date('3/14/2021 09:35:53 AM') },
  { stockId: 1010, stockName: 'Hydrogen', basePrice: 10, askQty: 1.0079, askPrice: 1, bidQty: 1, bidPrice: 12, lastPrice:20,lastUpdate: new Date('3/14/2021 09:35:53 AM') },
];


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTableModule,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  displayedColumns: string[] = ['stockId', 'stockName', 'basePrice','askQty', 'askPrice', 'bidQty', 'bidPrice', 'lastPrice','lastUpdate'];
  dataSource = ELEMENT_DATA;
}
