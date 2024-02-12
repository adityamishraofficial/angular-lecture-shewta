import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes= [
  {path: '', component: PostComponent}
]

@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class PostModule { }
