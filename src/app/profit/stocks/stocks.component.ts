import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css'],
})
export class StocksComponent implements OnInit {
  constructor(private stockService: StocksService) {}

  Highcharts = Highcharts;

  getStocks: any = [];
  chartOptions: {};

  ngOnInit(): void {
    this.stockService.getStocks().subscribe((data) => {
      this.getStocks = data;

      this.chartOptions = {
        chart: {
          type: 'areaspline',
        },
        title: {
          text: 'Moose hunting in Norway, 2000 - 2021',
        },
        subtitle: {
          align: 'center',
          text: 'Source: <a href="https://www.ssb.no/jord-skog-jakt-og-fiskeri/jakt" target="_blank">SSB</a>',
        },
        legend: {
          layout: 'vertical',
          align: 'left',
          verticalAlign: 'top',
          x: 120,
          y: 70,
          floating: true,
          borderWidth: 1,
          backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        },
        xAxis: {
          plotBands: [
            {
              // Highlight the two last years
              from: 2019,
              to: 2020,
              color: 'rgba(68, 170, 213, .2)',
            },
          ],
        },
        yAxis: {
          title: {
            text: 'Quantity',
          },
        },
        tooltip: {
          shared: true,
          headerFormat: '<b>Hunting season starting autumn {point.x}</b><br>',
        },
        credits: {
          enabled: false,
        },
        plotOptions: {
          series: {
            pointStart: 2000,
          },
          areaspline: {
            fillOpacity: 0.5,
          },
        },
        series: [
          {
            name: 'Moose',
            data: this.getStocks,
          },
        ],
      };
    });
  }
}
