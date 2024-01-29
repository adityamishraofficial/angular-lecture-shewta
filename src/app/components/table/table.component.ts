import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Student } from 'src/app/model/student';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  // @Input() studentList: Student[] = [];

  constructor(public dataService: DataService) { 

  }


  // ngOnChanges(changes: SimpleChanges): void {
  //     const preValue = JSON.stringify(changes['studentList'].previousValue)
  //     const newValue = JSON.stringify(changes['studentList'].currentValue)
  //     if (preValue !== newValue) {
  //       // find updated value from parent 
  //     }
  // }


}
