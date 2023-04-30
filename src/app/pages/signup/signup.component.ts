import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private fb: FormBuilder,private router: Router, private auth:AuthService) { }

  ngOnInit(): void {
    this.signupForm = this.createFormGroup();
  }
  get getControl() {
    return this.signupForm.controls;
  }

  createFormGroup() {
    return this.fb.group({
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }


  register(){
this.auth.RegisterUser(this.signupForm.value.name,this.signupForm.value.email, this.signupForm.value.password).subscribe(data=>{
  console.log(data)
})
  }



}
