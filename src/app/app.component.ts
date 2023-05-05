import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'testangapp';
  city = '';
  ngOnInit(): void {
  }
  print(value: any){
    console.log(value);
    this.city = value.name;
    console.log(this.city);
  }
}
