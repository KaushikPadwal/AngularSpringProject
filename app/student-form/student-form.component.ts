import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'model/student';
import { StudentServiceService } from 'service/student-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {

  student: Student;

  constructor(
    private router: Router,
      private studentService: StudentServiceService){
    this.student=new Student();
  }

  onSubmit(){
    this.studentService.save(this.student).subscribe( result => this.gotoStudentList());
  }

  gotoStudentList()
  {
    this.router.navigate(['/students']);
  }
}
