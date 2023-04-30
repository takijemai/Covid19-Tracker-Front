import { CovidoperationsService } from './../../services/covidoperations.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-newdatacovid',
  templateUrl: './newdatacovid.component.html',
  styleUrls: ['./newdatacovid.component.css']
})
export class NewdatacovidComponent implements OnInit {
  covidForm!: FormGroup


  constructor(private fb: FormBuilder,private router: Router,private covidservice: CovidoperationsService) {}

ngOnInit(){
  this.covidForm= this.addFormGroup();
}

addFormGroup() {
  return this.fb.group({
    country: new FormControl("", [Validators.required]),
    continent: new FormControl("", [Validators.required]),
    population: new FormControl("", [Validators.required]),
    cases: new FormControl("", [Validators.required]),
    deaths: new FormControl("", [Validators.required]),

  });
}

get getControl() {
  return this.covidForm.controls;
}


  submit(){

    const body= {
      country: this.covidForm.value.country,
      continent: this.covidForm.value.continent,
      population:this.covidForm.value.population,
      cases: this.covidForm.value.cases,
      deaths: this.covidForm.value.deaths
    }
this.covidservice.addCovidRecord(body).subscribe(data=>{
  console.log(data)
  Swal.fire({
    icon: 'success',
    title: 'Data  Covid Added successfully',
    timer: 2000,
    showConfirmButton: false
  });
  this.router.navigateByUrl('principal')

})
  }


}
