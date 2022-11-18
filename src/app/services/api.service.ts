import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //public facts: any = [];
  baseUrl = 'https://api.mangadex.org';

  constructor(
    private http: HttpClient
  ) { }

  public getApi(){
    //return this.http.get('https://ghibliapi.herokuapp.com/films').pipe(
    return this.http.get('https://www.fishwatch.gov/api/species').pipe(
    //return this.http.get('https://digimon-api.vercel.app/api/digimon').pipe(
      catchError(this.handleError)
    );
  };

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
