import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindingsdemo',
  templateUrl: './bindingdemo.component.html',
  styleUrls: ['./bindingdemo.component.css']
})
export class BindingsdemoComponent implements OnInit {

itemCount: number = 1;
btnText:string="Add an Item";
message:string="Hello Students";
goals=[];
goal='Be a good human being-Never lie';
constructor() { }  
ngOnInit() {}

addItem() {
    this.goals.push(this.goal);  
      this.goal= ''; 
       this.itemCount = this.goals.length;
  }
}