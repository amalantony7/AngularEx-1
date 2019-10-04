import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IStudent } from './student';
import { Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private _url = "/assets/Data/studentData.Json"
  constructor(private http : HttpClient) { }

  
  getStudentDetails() : Observable<IStudent[]>{
    return this.http.get<IStudent[]>(this._url)
                    .pipe(catchError(this.errorHandler));                 
  };

  errorHandler(error : HttpErrorResponse){
    return  throwError(error.message || "Server Error");   
  }
  }


