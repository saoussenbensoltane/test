import { Component, OnInit } from '@angular/core';
import { ResidenceService } from '../service/residence.service';
import { Exam } from 'src/core/models/examin';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Ajoutez cette ligne


@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent  implements OnInit{
modifier(_t14: Exam) {
throw new Error('Method not implemented.');
}
r: any;
 isEditing = false;
  currentExamId: string | null = null; examForm!: FormGroup;
listExams: Exam[] = [];
  constructor(private residenceService:ResidenceService,private fb: FormBuilder){
  
  
    this.examForm = this.fb.group({
      responsable: ['', Validators.required],
      coeff: [0, [Validators.required, Validators.min(1)]],
      session: ['', Validators.required]
    });
  }

   listresidenceDataBase:Exam[]=[]
    ngOnInit(): void {
    this.residenceService.getallExam().subscribe((data)=>{
    this.listresidenceDataBase=data
    console.log(this.listresidenceDataBase)
    })
  
    }

    supprime(id:any){
  this.residenceService.deleteExam(id).subscribe(()=>{
    //console.log('deleted!!!')
    this.ngOnInit()
  })

}




cancelEdit() {
  this.isEditing = false;
  this.currentExamId = null;
  this.examForm.reset();
}



}
