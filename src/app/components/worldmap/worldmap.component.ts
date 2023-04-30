import { Component, OnDestroy, OnInit } from '@angular/core';
import { CovidoperationsService } from 'src/app/services/covidoperations.service';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


@Component({
  selector: 'app-worldmap',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.css']
})
export class WorldmapComponent implements OnInit, OnDestroy {
  chart!: am4maps.MapChart
  constructor(private coviservice:CovidoperationsService) {}
  ngOnInit() {
    // Initialize map
    am4core.useTheme(am4themes_animated);
    this.chart = am4core.create("chartdiv", am4maps.MapChart);
    this.chart.geodata = am4geodata_worldLow;
    this.chart.projection = new am4maps.projections.Miller();

    // Create polygon series
    const polygonSeries = this.chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.exclude = ["AQ"]; // Exclude Antarctica from the map
    polygonSeries.useGeodata = true;

    // Configure polygon template
    const polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fillOpacity = 0.6;

    // Create hover state and set alternative fill color
    const hs = polygonTemplate.states.create("hover");
    hs.properties.fill = this.chart.colors.getIndex(0);

    // Add image series
    const imageSeries = this.chart.series.push(new am4maps.MapImageSeries());
    const circle = imageSeries.mapImages.template.createChild(am4core.Circle);
    circle.radius = 3;
    circle.nonScaling = true;

    const circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
    circle2.radius = 3;

    circle2.events.on("inited", (event:any) => {
      animateBullet(event.target);
    });

    // Animate bullets
    function animateBullet(circle:any) {
      const animation = circle.animate(
        [
          { property: "scale", from: 1 / circle.parent.zoomLevel, to: 5 / circle.parent.zoomLevel },
          { property: "opacity", from: 1, to: 0 }
        ],
        1000,
        am4core.ease.circleOut
      );
      animation.events.on("animationended", (event:any) => {
        animateBullet(event.target.object);
      });
    }


    this.coviservice.getCountriesTotalCases().subscribe((res:any) => {
      res.forEach((d:any) => {
        if (d.totalCases > 10) {
          d.color = "#FF0000"; // set color to red if total cases > 10
        } else {
          d.color = "#4d79ff";
        }
      });

      polygonSeries.data = res;


      const polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.tooltipText = "{name}";
      polygonTemplate.fillOpacity = 0.6;

      // Set fill property of polygonTemplate
      polygonTemplate.propertyFields.fill = "color";
      // Create hover state and set alternative fill color
      const hs = polygonTemplate.states.create("hover");
      hs.properties.fill = this.chart.colors.getIndex(0);


      //polygonTemplate.propertyFields.fill = "fill";
      imageSeries.data = res.filter((d:any) => d.latitude && d.longitude);
      imageSeries.dataFields.value = "value";
      imageSeries.dataSource.parser = new am4core.JSONParser();
      imageSeries.dataSource.parser.options.emptyAs = 0;
      imageSeries.dataSource.url = "https://www.amcharts.com/wp-content/uploads/assets/maps/js/worldLow.js";

      imageSeries.dataFields.value = "value";
      imageSeries.heatRules.push({
        "target": circle,
        "property": "radius",
        "min": 4,
        "max": 30,
        "dataField": "value",

      });
    });
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

}
