import { Component, OnInit } from '@angular/core';
import { UserHttpServiceService } from 'src/app/service/user-http-service.service';

interface UserList {
  first_name: string;
  last_name: string;
  email: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userList: UserList[] = [];
  constructor(private userHttpService: UserHttpServiceService) { }

  ngOnInit(): void {
    this.onGetUsers()
  }
  onGetUsers() {
    this.userHttpService.onGetUserList().subscribe(res => {
        this.userList = res;
    })
  }
}
