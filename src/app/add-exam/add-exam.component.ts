import { Component, OnInit } from '@angular/core';
import { ResidenceService } from '../service/residence.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'; // Ajoutez cette ligne
import { Exam } from 'src/core/models/examin';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent  implements OnInit{
  idupdate!:any 
 listresidenceDataBase: Exam[] = [];

    listres =new Exam()
    addF!:FormGroup

  constructor(private residenceService:ResidenceService, private r:Router  ,private act:ActivatedRoute){}
  
ngOnInit(): void{
        this.idupdate=this.act.snapshot.params['id'];
      
        this.addF = new FormGroup({   
          responsable: new FormControl ('',Validators.required),
          coeff:new FormControl ('',[Validators.required,Validators.maxLength(10)]), 
         session: new FormControl ('',[Validators.required,Validators.pattern(/^disponible+$/)])
    
        });
        this.residenceService.getallExam().subscribe((data) => {
    this.listresidenceDataBase = data;
  });
        if (this.idupdate) {

      this.residenceService.getbyexam(this.idupdate).subscribe((data)=>
        {
              this.listres=data
              this.addF.patchValue(this.listres as any)
        }
      );}

       this.residenceService.getallExam().subscribe((data)=>{
    this.listresidenceDataBase=data
    console.log(this.listresidenceDataBase)
    })

      }
     Update() {
    if (this.idupdate) {
      // Mode modification
      this.residenceService.updateexam(this.idupdate, this.addF.value).subscribe(() => {
        console.log("Examen modifié");
       
      });
    } 
  }


   deleteExam(id:any){
  this.residenceService.deleteExam(id).subscribe(()=>{
    //console.log('deleted!!!')
    this.ngOnInit()
  });



    
  }



  modifier(exam: Exam) {
    this.idupdate = exam.id;
    this.addF.patchValue(exam);
  
}







}





