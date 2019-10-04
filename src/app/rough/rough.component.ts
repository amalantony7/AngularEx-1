import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router , ParamMap } from '@angular/router';


@Component({
  selector: 'app-rough',
  templateUrl:'./rough.component.html' ,
  styleUrls: ['./rough.component.css']
})
export class RoughComponent implements OnInit {
  public stuId;
  constructor(private route : ActivatedRoute , private router: Router) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.stuId = id;

    this.route.paramMap.subscribe((params : ParamMap)=> 
      {
        let id = parseInt(params.get('id'));
        this.stuId = id;
      })
}
  onPrevious(){
    let pId = this.stuId - 1;
    this.router.navigate(['../',pId] , {relativeTo : this.route});
  }

  onNext(){
    let nId = this.stuId + 1;
    this.router.navigate(['../',nId] , {relativeTo : this.route});
  }


  onSelected(){
    let selectId = this.stuId ? this.stuId : null;
    this.router.navigate(['../', {id : selectId}], {relativeTo : this.route});
   }


   onContact(){
     this.router.navigate(['contact'] , {relativeTo : this.route});
   }

   onWork(){
     this.router.navigate(['work'] , {relativeTo : this.route});
   }
                
}
