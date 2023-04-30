import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const BASEURL = 'http://localhost:3000/api/covidapp';

@Injectable({
  providedIn: 'root'
})
export class CovidoperationsService {

  constructor(private http: HttpClient) { }

  getCovidDataByContinent(continent: string): Observable<any> {
    return this.http.get(`${BASEURL}/continent/${continent}`);
  }

  getCovidDataByCountry(country: string): Observable<any> {
    return this.http.get(`${BASEURL}/country/${country}`);

  }
  getCovidDataById(id: string): Observable<any> {
    return this.http.get(`${BASEURL}/data/${id}`);

  }
  deleteCovidRecordById(id: string): Observable<any> {
    return this.http.delete(`${BASEURL}/data/delete/${id}`)
  }

  getAllCovidData(): Observable<any> {
    return this.http.get(`${BASEURL}/coviddata/all`,)

  }

  getCountriesTotalCases(): Observable<any> {
    return this.http.get(`${BASEURL}/allcountry`)

  }


  getContinentsTotalCases(): Observable<any> {
    return this.http.get(`${BASEURL}/allcontinent`,)

  }


  addCovidRecord(body: any): Observable<any> {
    return this.http.post(`${BASEURL}/newdata`, body, )

  }



}









