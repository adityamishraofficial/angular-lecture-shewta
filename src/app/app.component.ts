import { Component } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'We always eat dinner together. They take the bus to work. He doesnt like vegetables.';
  data = new Date();
  constructor(private dataService: DataService) {
    this.dataService.studentObservable.subscribe(res => {
      console.log('studentObservable', res)
    })
  }
 
}
