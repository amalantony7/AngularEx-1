import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {ReverseStr} from './reverse_str.pipe';
import { DefaultPipePipe } from './default-pipe.pipe';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import {HttpClientModule} from '@angular/common/http';
import { CompanyEmployeeListComponent } from './company-employee-list/company-employee-list.component';
import { RoughComponent } from './rough/rough.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { WorkDetailsComponent } from './work-details/work-details.component';
import { StringRevPipe } from './string-rev.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ReverseStr,
    DefaultPipePipe,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    StudentListComponent,
    CompanyEmployeeListComponent,
    RoughComponent,
    routingComponents,
    PageNotFoundComponent,
    ContactDetailsComponent,
    WorkDetailsComponent,
    StringRevPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
