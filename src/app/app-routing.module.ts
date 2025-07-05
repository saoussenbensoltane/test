import { Exam } from './../core/models/examin';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExamComponent } from './exam/exam.component';
import { AddExamComponent } from './add-exam/add-exam.component';
const routes: Routes = [

  {path:"",redirectTo:"exam",pathMatch:'full'},
  {path:"home" ,component:HomeComponent},
       {path:"Exam" ,component:ExamComponent},
       {path:"AjouterExam" ,component:AddExamComponent},
       //{ path: 'update-exam/:id', component: A }
       


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
