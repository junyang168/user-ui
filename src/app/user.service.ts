import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

export interface User {
  id: number;
  name: string;
  age: number;
  address1: string;
  address2: string;
}

const endpoint = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }  


  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
  

  getUsers(nameFilter : string , ageFilter :string, sortBy : string, sortOrder :string ): Observable<any> {
    return this.http.get<User>(endpoint + 'users?name=' + nameFilter +'&age=' + ageFilter + '&sortBy='
    + sortBy + '&sortOrder=' + sortOrder
    ).pipe(
      catchError(this.handleError)

    );
  }
  
}
