import { AlldataComponent } from './pages/alldata/alldata.component';
import { DatasearchComponent } from './pages/datasearch/datasearch.component';
import { NewdatacovidComponent } from './pages/newdatacovid/newdatacovid.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';




const routes: Routes= [
  { path: "",
  component: HomeComponent,
},
  { path: "home",
   component: HomeComponent,
 },
  { path: "login",
  component: LoginComponent,  },
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "principal",
    component: PrincipalComponent,
  },
  {
    path: "newdatacovid",
    component: NewdatacovidComponent,
  },

  {
    path: "datasearch",
    component: DatasearchComponent,
  },
  {
    path: "alldata",
    component: AlldataComponent,
  },
  { path: "*",
  component: HomeComponent
 },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
