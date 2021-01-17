import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Donor } from '../Models/donor';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/xml'
  })
};
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl="http://localhost:34011//api/";

  constructor(private http: HttpClient) { }



  getDonor(bloodgroup,city):Observable<Donor[]>{
    return this.http.get<Donor[]>(`${this.baseUrl}search/${bloodgroup}/${city}`,httpOptions);
  }
}
