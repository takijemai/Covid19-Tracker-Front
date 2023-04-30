
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, Legend ,ChartDataset } from 'chart.js';
import { CovidoperationsService } from 'src/app/services/covidoperations.service';
import * as pluginDataLabels from "chartjs-plugin-datalabels";

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit{
  public chartReady = false;

  public pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
         color: 'rgb(255, 99, 132)'
        }
      },
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels && ctx.chart.data.labels[ctx.dataIndex];
          const data = ctx.chart.data.datasets && ctx.chart.data.datasets[0].data[ctx.dataIndex];
          return `${label}: ${data}`;
        },
      },
    },
  };

  public pieChartLabels= ["Africa", "America", "Asia", "Europe", "Oceania"];
  public pieChartDatasets: ChartDataset[] = [
    {
      data: [0, 0, 0, 0, 0],
      backgroundColor: ['rgb(229, 29, 236)', 'rgb(255, 0, 0)', 'rgb(12, 202, 59)', '#F46C23', '#275BEC'],
      borderColor: ['rgb(0,0,0)', 'rgb(0,0,0)', 'rgb(0,0,0)', 'rgb(0,0,0)', 'rgb(0,0,0)'],
    },
  ];
  public pieChartType: ChartType = "pie";
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(private covideservice: CovidoperationsService) {}

  async ngOnInit(): Promise<void> {
    await this.getContinents();
    this.chartReady = true;
  }

  async getContinents(): Promise<void> {
    this.covideservice.getContinentsTotalCases().subscribe(data => {
      //console.log(data);
      //console.log(data["Europe (totalcase)"])
      this.pieChartDatasets[0].data = [data["Africa (totalcase)"], data["America (totalcase)"], data["Asia (totalcase)"], data["Europe (totalcase)"], data["Oceania (totalcase)"]];
      this.pieChartLabels = ["Africa", "America", "Asia", "Europe", "Oceania"];
    });

  }

  public changeLegendPosition(): void {

  }

  public chartClicked({ event, active }: { event: MouseEvent; active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent; active: {}[] }): void {
    console.log(event, active);
  }




}
