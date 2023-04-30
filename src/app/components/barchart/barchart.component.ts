
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, Legend ,ChartDataset } from 'chart.js';
import { CovidoperationsService } from 'src/app/services/covidoperations.service';


@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  public chartReady = false;

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {

    },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end",
      },
    },

  };
  public barChartLabels = ["Africa", "America", "Asia", "Europe", "Oceania"];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataset[] = [
    { label: 'Total Cases' ,
      data: [0, 0, 0, 0, 0],
      backgroundColor: ["rgb(229, 29, 236)", "rgb(255, 0, 0)", "rgb(12, 202, 59)", "#F46C23", "#275BEC"],
      borderColor: ["rgb(0,0,0)", "rgb(0,0,0)", "rgb(0,0,0)", "rgb(0,0,0)", "rgb(0,0,0)"],
      borderWidth: 1
    }
  ];

  constructor(private covideservice: CovidoperationsService) {}

  async ngOnInit(): Promise<void> {
    await this.getContinents();
    this.chartReady = true;
  }

  async getContinents(): Promise<void> {
    this.covideservice.getContinentsTotalCases().subscribe(data => {
      //console.log(data)

      this.barChartData[0].data = [data["Africa (totalcase)"], data["America (totalcase)"], data["Asia (totalcase)"], data["Europe (totalcase)"], data["Oceania (totalcase)"]];
      this.barChartLabels= ["Africa", "America", "Asia", "Europe", "Oceania"];
    })
  }







}














