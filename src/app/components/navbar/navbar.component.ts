import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  myID = 123423;

  navLinks = ['/post', '/category', '/users']
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.studentObservable.subscribe(data => {
      if (data) {
        this.navLinks[0] = data;
      }
    })
  }

}
