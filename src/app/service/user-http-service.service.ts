import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserHttpServiceService {

  constructor(private http: HttpClient) { }

  onGetUserList() {
    const path = 'https://reqres.in/api/users';
    const params = {
      page: 2
    };
    return this.http.get(path, {params: params}).pipe(map((response: any) => {
      return response.data
    }))
  }

  saveUser(userData: any) {
    const path = 'https://reqres.in/api/users';
    return this.http.post(path, userData)
  }
}
