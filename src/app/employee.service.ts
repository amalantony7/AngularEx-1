import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployee(){
      
    return [
      {
        "Id":1, "Name" : "Amal", "Age": 22
      },
      {
        "Id":2, "Name" : "Arun" , "Age":23
      },
      {
        "Id":3,"Name" : "Akshay" , "Age":24
      }
    ];
  }

  constructor() { 

  }
}
