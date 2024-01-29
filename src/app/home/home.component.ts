import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  studentList: Student[] = [];

  onSubmit(studentList: Student[]){
    this.studentList = [...studentList];
  }
}
