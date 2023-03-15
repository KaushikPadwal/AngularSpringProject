import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'model/student';
import { StudentServiceService } from 'service/student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students!:Student[];

  constructor( private studentService:StudentServiceService){

  }
   ngOnInit()
   {
    this.studentService.findAll().subscribe(data => {
      this.students = data;
    });
   }
}
