import { Component, OnInit } from '@angular/core';
import {EventService} from 'src/app/services/event.service';
import {Event} from 'src/app/Model/event';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  events: Event[] = [];
  constructor(private eventService: EventService) { }

  funcDelete(e:Event){
    this.eventService.funcDelete(e);
  } 
  
  addEvent(eventName:string,desc:string,speaker:string) { 
    let newEvent= { id: this.events.length+1,
     name: eventName, description:desc, speaker: speaker };
     return this.events.push(newEvent);
  }  
  
  ngOnInit(): void {
    this.events=this.eventService.getEvents();
  }

}
