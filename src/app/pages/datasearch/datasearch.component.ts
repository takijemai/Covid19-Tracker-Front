import { CovidoperationsService } from 'src/app/services/covidoperations.service';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import * as moment from 'moment';

export interface Data {
  continent: string;
  country: string;
  population: number;
  cases: number;
  deaths: number;
  date: Date;
  }
@Component({
  selector: 'app-datasearch',
  templateUrl: './datasearch.component.html',
  styleUrls: ['./datasearch.component.css']
})
export class DatasearchComponent   implements OnInit {

searchForm!:FormGroup
data: Data[] = [];
country: any
continent: any
population: any
cases:any
deaths: any
date: any
id:any
showTable: boolean = false;
  constructor( private fb: FormBuilder,private covidservice: CovidoperationsService){}


  ngOnInit(): void {
    this.searchForm = this.searchFormGroup();


  }
  searchFormGroup() {
    return this.fb.group({
      field: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      option: new FormControl("", [Validators.required]),
    });
  }

  get getControl() {
    return this.searchForm.controls;
  }



  datasearch(){
const fieldsearch= this.searchForm.value.field
const optionsearch = this.searchForm.value.option
if(optionsearch === 'country'){
this.covidservice.getCovidDataByCountry(fieldsearch).subscribe(res=>{
  this.data = Object.values(res.covidData)
console.log(this.data)
console.log(res)
this.country= res.covidData.country
this.continent= res.covidData.continent
this.population=res.covidData.population
this.cases=res.covidData.cases
this.deaths=res.covidData.deaths
this.date= res.covidData.date
this.id= res.covidData._id
this.showTable= true

})
}else if(optionsearch === 'continent'){
  this.covidservice.getCovidDataByContinent(fieldsearch).subscribe(res=>{
    console.log(res)
    console.log('data continent')
    this.data = Object.values(res.covidData)
    this.country= res.covidData.country
    this.continent= res.covidData.continent
    this.population=res.covidData.population
    this.cases=res.covidData.cases
    this.deaths=res.covidData.deaths
    this.date= res.covidData.date
    this.id= res.covidData._id
    this.showTable= true
  })
}

  }

  delete(item: any) {
    console.log(item)
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this record!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.covidservice.deleteCovidRecordById(item._id).subscribe((data:any) => {
          console.log(data);
          Swal.fire({
            title: 'Deleted!',
            text: 'Your record has been deleted.',
            icon: 'success'
          });
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelled',
          text: 'Your record is safe :)',
          icon: 'error'
        });
      }
    });
  }


  TimeNow(time:any){
    const daynow= new Date()
    const date= new Date(time)
     const date1= moment(new Date(daynow))
     const date2= moment(new Date(date))
  const timedate= date1.diff(date2,'days')
  if(timedate === 0){
    return moment(time).format('LT')
  }else{
    return  moment(time).format('DD/MM/YYYY')
  }

  }



}
