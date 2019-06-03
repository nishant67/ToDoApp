import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  SuperHeroList: any;
  SuperHeroName: any;
  SuperHero : any ="";
  constructor() {
    this.SuperHeroList = [
      {
        id: 0, value: "IronMan"
      },
      {
        id: 1, value: "SpiderMan"
      },
      {
        id: 2, value: "Thor"
      },
      {
        id: 3, value: "Hulk"
      },
      {
        id: 4, value: "Dr. Strange"
      }
    ]
  }

  ngOnInit() {
  }

  onEdit(item) {
    this.SuperHero = item;
    this.SuperHeroList.forEach(e => {
      if (e.id == item.id) {
        this.SuperHeroName = e.value
      }
    });
  }

  onSubmit(){
   
    this.SuperHeroList.forEach(e => {
      if (e.id == this.SuperHero.id) {
          e.value = this.SuperHeroName
      }
    });
    this.SuperHero = '';
    this.SuperHeroName ="";
    

  }

}
