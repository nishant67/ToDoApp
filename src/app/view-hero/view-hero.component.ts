import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-hero',
  templateUrl: './view-hero.component.html',
  styleUrls: ['./view-hero.component.css']
})
export class ViewHeroComponent implements OnInit {
  
  SuperHeroList :any;
  heroName : any;
  constructor() { 
    this.SuperHeroList = [
      {
        id: 1, value: "IronMan"
      },
      {
        id: 2, value: "SpiderMan"
      },
      {
        id: 3, value: "Thor"
      },
      {
        id: 4, value: "Hulk"
      },
      {
        id: 5, value: "Dr. Strange"
      }
    ]
  }

  ngOnInit() {
  }

  editHero(i){
    
  }
}
