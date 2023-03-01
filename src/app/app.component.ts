import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TimeTrackerBarChart';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: []
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false
  };

  data = [
    {
      "soll": 8,
      "ist": 9,
      "weekday": "2023-02-27"
    },
    {
      "soll": 8,
      "ist": 9,
      "weekday": "2023-02-28"
    },
    {
      "soll": 8,
      "ist": 9,
      "weekday": "2023-03-01"
    },
    {
      "soll": 8,
      "ist": 5,
      "weekday": "2023-03-02"
    },
    {
      "soll": 8,
      "ist": 9,
      "weekday": "2023-03-03"
    }
  ];

  constructor() {
    this.setData();
  }

  setData() {
    let data_ist:any[] = [];
    let data_soll:any[] = [];
    let labels:any[] = [];

    this.data.forEach((entry) => {
      data_ist.push(entry['ist']);
      data_soll.push(entry['soll']);
      labels.push(getDayofWeek(entry['weekday']));
    });

    this.barChartData.labels = labels;
    
    let dataSet:any = {
      data: [],
      label: ''
    };

    dataSet['data'].push(data_ist);
    dataSet['data'].push(data_soll);

    this.barChartData.datasets.push(dataSet);

    function getDayofWeek(date:any) {
      const dayOfWeek = new Date(date).getDay();
      return isNaN(dayOfWeek) ? null : 
      ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][dayOfWeek];
    }
  }
}