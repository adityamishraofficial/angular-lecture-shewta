import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  constructor(private activateRouter: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit(): void {
    // this.activateRouter.params.subscribe(params =>{
    //   console.log('My id', params['id'])
    // })
    // this.activateRouter.queryParams.subscribe(queryParams => {
    //   console.log('query Params', queryParams)
    // })
  }


  onGetUsers(){
    
  }

  eventTrigger() {
    this.dataService.student.next('Hello world');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy')
  }
}
