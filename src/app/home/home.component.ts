import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  SuperHeroList : any;
  pageStatus : boolean =  false;
  constructor() {
   
   }

  ngOnInit() {
  
  }

  show(page){
    console.log(page);
    
    
  }

}
