import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserHttpServiceService } from 'src/app/service/user-http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    username: '',
    password: ''
  }
  errMsg = '';
  constructor(private userHttpService: UserHttpServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.errMsg = '';
    this.userHttpService.login(this.user).subscribe((res: any) => {
      console.log('Login Success', res)
      localStorage.setItem('token', res.token)
      this.router.navigateByUrl('/home')
    }, err => {
      this.errMsg = 'User is not valid';
      console.log('User is not valid')
    })
  }
}
