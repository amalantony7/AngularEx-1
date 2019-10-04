import { Injectable } from '@angular/core'; 
import { IEmployeeDetails } from './student-details/companyEmployee';
import { Observable, throwError} from 'rxjs/';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private _url :string = "/assets/Data/Employees.Json"

  constructor(private http: HttpClient) { }


  getEmployee() : Observable<IEmployeeDetails[]>{
    return this.http.get<IEmployeeDetails[]>(this._url)
                      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error : HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
