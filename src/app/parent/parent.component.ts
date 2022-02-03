import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { ChildComponent, Employee } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterViewInit {
  @ViewChild(ChildComponent)child:ChildComponent;

  constructor() { }

  employee:Employee[]

  ngOnInit(): void {
    this.employee=[{
      Name:"Aprajita",
      Age:24,
      Designation:"DEVELOPER",
      Salary:25000

      
    },
    {
      Name:"Niku",
      Age:22,
      Designation:"DEVELOPER",
      Salary:25000

      
    },
    {
      Name:"Dibyani",
      Age:20,
      Designation:"DEVELOPER",
      Salary:25000

      
    },
    {
      Name:"Kalyani",
      Age:15,
      Designation:"DEVELOPER",
      Salary:25000

      
    },
    {
      Name:"Aman",
      Age:23,
      Designation:"DEVELOPER",
      Salary:25000

      
    }
  ]
    
  }
  ngAfterViewInit(){
    this.child.data.Name="John"
  
  }

  counter = 5;

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }

  // messageFromChild:string;

  // getMessage(message:string){

  //   this.messageFromChild=message


  
    

  // }

  // isDisplay:boolean=false

  Name;
  Age;
  Designation;
  salary

  empData(employee:Employee){
    // this.isDisplay=true
  
    this.Name=employee.Name;
    this.Age =employee.Age;
    this.Designation =employee.Designation;
    this.salary =employee.Salary
  }


}
