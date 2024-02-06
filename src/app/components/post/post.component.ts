import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private activateRouter: ActivatedRoute) { }

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

}
