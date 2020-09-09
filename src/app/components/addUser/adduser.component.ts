/*import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AddUserComponent implements OnInit {
  addForm:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  

  ngOnInit(): void {
    this.addForm=this.formBuilder.group({
      id:[],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",[Validators.required,Validators.email]]
    })
  }

  //For Adding the values entered from user 
  onSubmit()
 {
    
  }

 
}*/

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { UserTable } from 'src/app/Model/UserTable';

@Component({
  selector: 'app-add-user',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AddUserComponent implements OnInit {
  addUser:FormGroup

  constructor(private formBuilder:FormBuilder,private service:UserService)  { }

  

  ngOnInit(): void {
    this.addUser=this.formBuilder.group({
      id:[],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",[Validators.required,Validators.email]]
    })
  }

  //For Adding the values entered from user 
  onSubmit(obj:UserTable)
  {
    console.log(obj);
    this.service.addUser(obj).subscribe(data=>{
    console.log(data) 
    alert("User Added");})
  }

 
}