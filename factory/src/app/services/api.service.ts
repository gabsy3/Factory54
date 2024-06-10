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
    { stockId: 1001, stockName: 'Hydrogen', basePrice: 10, askQty: 1.0079, askPrice: 1, bidQty: 2, bidPrice: 12, lastPrice:20,lastUpdate: new Date('3/14/2021 09:35:53 AM') },
    { stockId: 1002, stockName: 'Hydrogen', basePrice: 10, askQty: 1.0079, askPrice: 1, bidQty: 3, bidPrice: 12, lastPrice:20,lastUpdate: new Date('3/14/2021 09:35:53 AM') },
    { stockId: 1003, stockName: 'Hydrogen', basePrice: 10, askQty: 1.0079, askPrice: 1, bidQty: 4, bidPrice: 12, lastPrice:20,lastUpdate: new Date('3/14/2021 09:35:53 AM') },
    { stockId: 1004, stockName: 'Hydrogen', basePrice: 10, askQty: 1.0079, askPrice: 1, bidQty: 5, bidPrice: 12, lastPrice:20,lastUpdate: new Date('3/14/2021 09:35:53 AM') },
    { stockId: 1005, stockName: 'Hydrogen', basePrice: 10, askQty: 1.0079, askPrice: 1, bidQty: 6, bidPrice: 12, lastPrice:20,lastUpdate: new Date('3/14/2021 09:35:53 AM') },
    { stockId: 1006, stockName: 'Hydrogen', basePrice: 10, askQty: 1.0079, askPrice: 1, bidQty: 7, bidPrice: 12, lastPrice:20,lastUpdate: new Date('3/14/2021 09:35:53 AM') },
    { stockId: 1007, stockName: 'Hydrogen', basePrice: 10, askQty: 1.0079, askPrice: 1, bidQty: 1, bidPrice: 12, lastPrice:20,lastUpdate: new Date('3/14/2021 09:35:53 AM') },
    { stockId: 1008, stockName: 'Hydrogen', basePrice: 10, askQty: 1.0079, askPrice: 1, bidQty: 1, bidPrice: 12, lastPrice:20,lastUpdate: new Date('3/14/2021 09:35:53 AM') },
    { stockId: 1009, stockName: 'Hydrogen', basePrice: 10, askQty: 1.0079, askPrice: 1, bidQty: 1, bidPrice: 12, lastPrice:20,lastUpdate: new Date('3/14/2021 09:35:53 AM') },
    { stockId: 1010, stockName: 'Hydrogen', basePrice: 10, askQty: 1.0079, askPrice: 1, bidQty: 1, bidPrice: 12, lastPrice:20,lastUpdate: new Date('3/14/2021 09:35:53 AM') },
  ];

  calcAskTotal(){
    for(let item of this.ELEMENT_DATA){
      item.askTotal = item.askPrice * item.askQty
    }
    return this.ELEMENT_DATA
  }

  calcBidTotal(){
    for(let item of this.ELEMENT_DATA){
      item.bidTotal = item.bidPrice * item.bidQty
    }
    return this.ELEMENT_DATA
  }

  calcPercentageChange(){
    for(let item of this.ELEMENT_DATA){
      item.percentageChange = ((item.lastPrice/item.basePrice)-1)*100;
    }
    return this.ELEMENT_DATA
  }

  getData(){
    return this.ELEMENT_DATA;
  }
}
