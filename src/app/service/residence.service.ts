import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exam} from 'src/core/models/examin';

@Injectable({
  providedIn: 'root'
})

export class ResidenceService {

  constructor(private http:HttpClient) { }

  getSameValueOf(list:any[], critiria:string, value:any){
let n=0
    for(let i in list){
      if(list[i][critiria]==value){

        n++
          }
        }
    return n

  }
  

getallExam():Observable<Exam[]>{
  return this.http.get<Exam[]>("http://localhost:3000/exam/")
}
deleteExam(id:any):Observable<Exam>{
  return this.http.delete<Exam>("http://localhost:3000/exam/"+id)
}
addexam(res:Exam):Observable<Exam[]>{
  return this.http.post<Exam[]>("http://localhost:3000/exam/",res)
}

getbyexam(id:any):Observable<Exam>{
  return this.http.get<Exam>("http://localhost:3000/exam/"+id)
}
getbyproduct(id:any):Observable<Exam>{
  return this.http.get<Exam>("http://localhost:3000/exam/"+id)
}

updateexam(id:any,res:Exam):Observable<Exam[]>{
  return this.http.put<Exam[]>("http://localhost:3000/exam/"+id,res)
}
}
