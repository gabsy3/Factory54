import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  stockId: number;
  stockName: string;
  askQty: number;
  askPrice: number;
  bidQty: number;
  bidPrice: number;
  lastUpdate: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {stockId: 1000, stockName: 'Hydrogen', askQty: 1.0079, askPrice: 1 , bidQty:1,bidPrice:12,lastUpdate:new Date('3/14/2021 09:35:53 AM')},
  {stockId: 1001, stockName: 'Hydrogen', askQty: 1.0079, askPrice: 1 , bidQty:1,bidPrice:12,lastUpdate:new Date('3/14/2021 09:35:53 AM')},
  {stockId: 1002, stockName: 'Hydrogen', askQty: 1.0079, askPrice: 1 , bidQty:1,bidPrice:12,lastUpdate:new Date('3/14/2021 09:35:53 AM')},
  {stockId: 1003, stockName: 'Hydrogen', askQty: 1.0079, askPrice: 1 , bidQty:1,bidPrice:12,lastUpdate:new Date('3/14/2021 09:35:53 AM')},
  {stockId: 1004, stockName: 'Hydrogen', askQty: 1.0079, askPrice: 1 , bidQty:1,bidPrice:12,lastUpdate:new Date('3/14/2021 09:35:53 AM')},
  {stockId: 1005, stockName: 'Hydrogen', askQty: 1.0079, askPrice: 1 , bidQty:1,bidPrice:12,lastUpdate:new Date('3/14/2021 09:35:53 AM')},
  {stockId: 1006, stockName: 'Hydrogen', askQty: 1.0079, askPrice: 1 , bidQty:1,bidPrice:12,lastUpdate:new Date('3/14/2021 09:35:53 AM')},
  {stockId: 1007, stockName: 'Hydrogen', askQty: 1.0079, askPrice: 1 , bidQty:1,bidPrice:12,lastUpdate:new Date('3/14/2021 09:35:53 AM')},
  {stockId: 1008, stockName: 'Hydrogen', askQty: 1.0079, askPrice: 1 , bidQty:1,bidPrice:12,lastUpdate:new Date('3/14/2021 09:35:53 AM')},
  {stockId: 1009, stockName: 'Hydrogen', askQty: 1.0079, askPrice: 1 , bidQty:1,bidPrice:12,lastUpdate:new Date('3/14/2021 09:35:53 AM')},
  {stockId: 1010, stockName: 'Hydrogen', askQty: 1.0079, askPrice: 1 , bidQty:1,bidPrice:12,lastUpdate:new Date('3/14/2021 09:35:53 AM')},
];


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , MatTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  displayedColumns: string[] = ['stockId', 'stockName', 'askQty', 'askPrice','bidQty', 'bidPrice', 'lastUpdate'];
  dataSource = ELEMENT_DATA;
}
