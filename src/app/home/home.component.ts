import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  studentFormData: Student = {
    firstName: '',
    email: '',
    address: '',
    result: '',
    marks: 0
  }

  studentList: Student[] = [];

  constructor() { }

  onSubmit(studentData: Student){
    this.studentList.push({...studentData})
  }

}
