
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,private router: Router, private auth: AuthService, ) { }

  ngOnInit(): void {
    this.loginForm = this.loginFormGroup();
  }


  loginFormGroup() {
    return this.fb.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required,Validators.minLength(6),
      ]),
    });
  }

  get getControl() {
    return this.loginForm.controls;
  }

  login(){
    this.auth.loginUser(this.loginForm.value.email, this.loginForm.value.password).subscribe(data=>{
      console.log(data)
      if(!sessionStorage.getItem("auth")){
        sessionStorage.setItem("auth", data.message)
        this.router.navigateByUrl('principal')
        Swal.fire({
          icon: 'success',
          title: 'Logged in successfully',
          timer: 2000,
          showConfirmButton: false
        });
      }

    }, err=>{
      console.log(err);
          Swal.fire({
            title: "Error!",
            text: err.error.message,
            icon: "error",
          });
    })
  }


}
