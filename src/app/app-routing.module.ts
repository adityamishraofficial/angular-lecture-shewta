import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', canActivate: [AuthGuard], component: HomeComponent},
  {path: 'post', canActivate: [AuthGuard],  loadChildren: () => import('./components/post/post.module').then(m => m.PostModule)},
  {path: 'category', canActivate: [AuthGuard], component: CategoryComponent},
  {path: 'users', canActivate: [AuthGuard], component: UsersComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
