import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/model/student';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent{

  studentFormData: Student = {
    firstName: '',
    email: '',
    address: '',
    result: '',
    marks: 0
  }

  studentList: Student[] = [];

  // @Output() studentListObj = new EventEmitter();

  constructor(private dataService: DataService) { }

  onSubmit(studentData: Student){
    this.dataService.studentListObj = studentData
    // this.dataService.studentList.push({...studentData})
    // this.studentListObj.emit(this.studentList)
  }

}
