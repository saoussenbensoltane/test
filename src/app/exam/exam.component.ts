import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterConfigOptions } from '@angular/router';
import { ResidenceService } from '../service/residence.service';
import { Exam} from 'src/core/models/examin';
import{HttpClientModule} from '@angular/common/http'

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})

export class ExamComponent  implements OnInit{
  constructor(private service:ResidenceService , private r:Router){}
  addF!:FormGroup
  ngOnInit():  void {
this.addF=new FormGroup({
id: new FormControl('',Validators.required),
Responsable: new FormControl('',Validators.required),
coeff: new FormControl('',Validators.required),
session: new FormControl('',Validators.required)
})
}
add(){
  console.log(this.addF.value)
this.service.addexam(this.addF.value).subscribe(()=>{
console.log("added");
this.r.navigateByUrl("exam")
})
}}



