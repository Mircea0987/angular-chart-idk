import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  constructor(private http: HttpClient) {}

  getStocks() {
    return this.http.get('/assets/database/stocks.json');
  }
}
