import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  public student =[];
  public errorMess;
  public stuId; 

  constructor(private _studentDetails : StudentService ,
     private router : Router ,
     private route : ActivatedRoute) { }

  ngOnInit() {
    this._studentDetails.getStudentDetails()
        .subscribe(data => this.student = data,
                    error => this.errorMess = error);

     this.route.paramMap.subscribe((params : ParamMap) =>{
      let id = parseInt(params.get('id'));
      this.stuId = id;
     })               
  }

  getId(item){
    this.router.navigate([item.Id] , {relativeTo : this.route});
  }

  onSelect(item){
    return item.Id === this.stuId;
  }



}
