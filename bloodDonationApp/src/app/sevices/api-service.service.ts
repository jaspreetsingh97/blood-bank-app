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
export class ApiServiceService {
  private baseUrl="http://localhost:34011/api/";

  constructor(private http: HttpClient) { }



  getAllDonor():Observable<Donor[]>{
    return this.http.get<Donor[]>(this.baseUrl+'Donor' , httpOptions);
  }

  SaveDonor(donor:Donor):Observable<Donor>{
    return this.http.post<Donor>( this.baseUrl+'Donor' , donor );
  }



  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error);
  //     this.log(`${operation} failed: ${error.message}`);

  //     return of(result as T);
  //   };
  // }

  // private log(message: string) {
  //   console.log(message);
  // }
}
