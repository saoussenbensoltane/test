import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResidenceService } from '../service/residence.service';
import { Exam } from 'src/core/models/examin';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  addF!: FormGroup;
  listresidenceDataBase: Exam[] = [];

  constructor(private service: ResidenceService, private r: Router) {}

  ngOnInit(): void {
    this.addF = new FormGroup({
      id: new FormControl('', Validators.required),
      responsable: new FormControl('', Validators.required),
      coeff: new FormControl('', Validators.required),
      session: new FormControl('', Validators.required)
    });

    // Charger les données existantes au début
    this.getAllExams();
    
  }

  getAllExams() {
    this.service.getallExam().subscribe((data) => {
      this.listresidenceDataBase = data;
    });
  }

  add() {
    const newExam = this.addF.value;
    console.log(newExam);

    this.service.addexam(newExam).subscribe(() => {
      console.log("Ajouté !");
      this.listresidenceDataBase.push(newExam); 
      this.addF.reset(); 
    });
  }
}
