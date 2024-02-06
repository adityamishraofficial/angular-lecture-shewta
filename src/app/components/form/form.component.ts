import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/model/student';
import { DataService } from 'src/app/service/data.service';
import { UserHttpServiceService } from 'src/app/service/user-http-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  studentForm!: FormGroup;
  submitted = false;
  // studentFormData: Student = {
  //   firstName: '',
  //   email: '',
  //   address: '',
  //   result: '',
  //   marks: 0
  // }
  constructor(private fb: FormBuilder,
    private userHttpService: UserHttpServiceService) {}
  ngOnInit(): void {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
      marks: [0]
    })
  }

  get f(): any {return this.studentForm.controls}

  // studentList: Student[] = [];

  // @Output() studentListObj = new EventEmitter();

  // constructor(private dataService: DataService) { }

  onSubmit(){
    this.submitted = true;
    if (this.studentForm.invalid) {
      return;
    }
    // console.log('Form is valid')
    console.log('Forms Value', this.studentForm.value)
   this.userHttpService.saveUser(this.studentForm.value).subscribe((res: any) => {
    alert('User data has been saved')
   })
  }

  onReset(){
    this.submitted = false;
    this.studentForm.reset();
  }

  onUpdate(){
    this.studentForm.patchValue({
      email: 'This is a title',
      firstName: 'aditya'
    })
    // this.studentForm.setValue({
    //   firstName: 'aditya',
    //   email: 'This is a title',
    //   address: 'my address',
    //   marks: 132
    // })
  }
}
