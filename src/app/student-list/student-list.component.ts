import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  public student = [];
  public errorMess;

  constructor(private _studentDetails : StudentService) { }

  ngOnInit() {
    this._studentDetails.getStudentDetails()
        .subscribe(data => this.student = data,
                    error => this.errorMess = error);
  }

}
