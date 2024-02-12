import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   student = new BehaviorSubject('');
   studentObservable = this.student.asObservable();

  private studentList: Student[] = [];
  constructor() { }

  set studentListObj(value: Student) {
    this.studentList.push({...value})
  }

  get studentListObj(): any {
    return this.studentList;
  }
}
