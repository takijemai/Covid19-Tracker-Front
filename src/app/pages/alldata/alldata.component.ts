import { Router } from '@angular/router';
import { CovidoperationsService } from 'src/app/services/covidoperations.service';
import { Component, OnInit } from '@angular/core';
import { NumeralPipe } from 'ngx-numeral';

@Component({
  selector: 'app-alldata',
  templateUrl: './alldata.component.html',
  styleUrls: ['./alldata.component.css']
})
export class AlldataComponent implements OnInit{
  totalCases!: number
  totalDeaths!: number

 countrydata: any = []
constructor(private covidservice: CovidoperationsService, private router : Router){}


ngOnInit(): void {
  this.getalldata()
}


getalldata(){
this.covidservice.getAllCovidData().subscribe(data=>{
  console.log(data)
  this.countrydata= data.covidData
//console.log(data.covidData)
  let totalCases = 0
  let totalDeats= 0

  for (let i = 0; i < data.covidData.length; i++) {
    totalCases += data.covidData[i].cases;
    totalDeats += data.covidData[i].deaths;

  }
    this.totalCases = totalCases;
    this.totalDeaths= totalDeats

    //console.log(this.countrydata);
    // console.log(this.totalDeaths);
  });
}

logout(){
this.router.navigateByUrl('home')
let token = sessionStorage.getItem('auth')
if(token){
  sessionStorage.removeItem('auth')
}
}
}
