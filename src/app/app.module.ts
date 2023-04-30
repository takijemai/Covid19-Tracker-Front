
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpinterceptorService } from './services/httpinterceptor.service';
import { WorldmapComponent } from './components/worldmap/worldmap.component';
import { PiechartComponent } from './components/piechart/piechart.component';
import { NgChartsModule } from 'ng2-charts';
import { BarchartComponent } from './components/barchart/barchart.component';
import { NewdatacovidComponent } from './pages/newdatacovid/newdatacovid.component';
import { DatasearchComponent } from './pages/datasearch/datasearch.component';

import {  MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SharedModule } from './interfaces/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { AlldataComponent } from './pages/alldata/alldata.component';
import { NumeralModule } from 'ngx-numeral';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    PrincipalComponent,
    WorldmapComponent,
    PiechartComponent,
    BarchartComponent,
    NewdatacovidComponent,
    DatasearchComponent,
    AlldataComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    MatTableModule,
    MatSortModule,
    ReactiveFormsModule,
    SharedModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    NumeralModule


  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpinterceptorService, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
