import { Component, OnInit } from '@angular/core';
import { ResidenceService } from '../service/residence.service';
import { Exam } from 'src/core/models/examin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent  implements OnInit{
r: any;

  constructor(private residenceService:ResidenceService,private router: Router){
  
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

modifier(id: number) {
  this.router.navigate(['/update-exam', id]);
}



}
