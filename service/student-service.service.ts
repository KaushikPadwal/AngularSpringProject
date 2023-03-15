import { Injectable } from '@angular/core';
import { Student } from 'model/student';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class StudentServiceService {

  private studentsUrl: string;

  constructor(private http:HttpClient) {
    this.studentsUrl = 'http://localhost:8080/students';
  }

  public findAll():Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl);
  }

  public save(student: Student) {
    return this.http.post<Student>(this.studentsUrl, student);
  }
}
