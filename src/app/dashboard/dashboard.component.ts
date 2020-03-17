import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
 public product:[
  {"assets/images/dealShoes.jpg", id:"prod1"},
  {"assets/images/dealEarphone.jpg", id:"prod2"},  
 ]
  constructor() { }

  ngOnInit(): void {
  }
  
  

  

}
