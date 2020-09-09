import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
  
})
export class HomeComponent implements OnInit {
  fname:string='sriya';
  lname:string='meghana';
  salary:number=1000;
  age:number=21;
  gender:string='female';

  constructor() { 
    

  }

  ngOnInit(): void {
  }

}
