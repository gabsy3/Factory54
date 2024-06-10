import { Injectable, inject } from '@angular/core';
import { modelData } from '../models/modelData.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http = inject(HttpClient);
  ELEMENT_DATA: modelData[] = [
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
  constructor() { }

  getData(){
    //return this.http.get<modelData>('')
    return this.ELEMENT_DATA;
  }
  
}
