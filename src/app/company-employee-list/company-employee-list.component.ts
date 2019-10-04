import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-employee-list',
  templateUrl: './company-employee-list.component.html',
  styleUrls: ['./company-employee-list.component.css']
})
export class CompanyEmployeeListComponent implements OnInit {

  public cEmployee =[];
  public errorMessage;

  constructor(private _EmployeeDetails : CompanyService) { }

  ngOnInit() {
    this._EmployeeDetails.getEmployee()
                            .subscribe((response) => this.cEmployee = response,
                                        (error) => this.errorMessage = error);
  }

}
