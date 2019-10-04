import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { CanActivate } from '@angular/router';

@Component({
  selector: 'app-company-employee-details',
  templateUrl: './company-employee-details.component.html',
  styleUrls: ['./company-employee-details.component.css']
})
export class CompanyEmployeeDetailsComponent implements OnInit {


  public cEmployee = [];
  public errorMessage;

  constructor(private _companyEmployee : CompanyService) { }

  ngOnInit() {

      this._companyEmployee.getEmployee()
                              .subscribe((response) => this.cEmployee = response,
                                (error) => this.errorMessage = error);   
  }

 
 
}