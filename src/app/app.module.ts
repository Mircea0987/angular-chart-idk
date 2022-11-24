import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ProfitComponent } from './profit/profit.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { BitcoinComponent } from './profit/bitcoin/bitcoin.component';
import { RightChartComponent } from './right-chart/right-chart.component';
import { TableComponent } from './profit/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { StocksComponent } from './profit/stocks/stocks.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfitComponent,
    BitcoinComponent,
    RightChartComponent,
    TableComponent,
    StocksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HighchartsChartModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
