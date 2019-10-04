import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { CompanyEmployeeDetailsComponent } from './company-employee-details/company-employee-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoughComponent } from './rough/rough.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { WorkDetailsComponent } from './work-details/work-details.component';
import { ExGuardGuard } from './ex-guard.guard';


const routes: Routes = [
  {path : '' , redirectTo : "/studentDetails" , pathMatch : "full"},
  {path : "studentDetails" , component : StudentDetailsComponent},
  {path : "companyEmployees" , component : CompanyEmployeeDetailsComponent , canActivate : [ExGuardGuard]},
  {path : "studentDetails/:id" ,
   component : RoughComponent,
   children : [
    {path : 'contact' , component : ContactDetailsComponent},
    {path : 'work' , component : WorkDetailsComponent}
  ]
  },
  {path : '**' , component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [StudentDetailsComponent, 
                                  CompanyEmployeeDetailsComponent, 
                                  PageNotFoundComponent,
                                  RoughComponent,
                                  ContactDetailsComponent,
                                  WorkDetailsComponent];
