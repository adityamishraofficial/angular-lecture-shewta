import { Injectable } from '@angular/core';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private studentList: Student[] = [];
  constructor() { }

  set studentListObj(value: Student) {
    this.studentList.push({...value})
  }

  get studentListObj(): any {
    return this.studentList;
  }
}
