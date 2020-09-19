import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {
  missionName : string ='housework'
  kids = [
    {name: 'Liano', data: {age: 12, mass: '45 kg', sidekick: 'Emma'}, image: 'assets/images/Emma.png'},
    {name: 'Ethan', data: {age: 11, mass: '50 kg', sidekick: 'Sean'}, image: 'assets/images/Sean.png'},
    {name: 'Diamen', data: {age: 9, mass: '40 kg', sidekick: 'Dan'}, image: 'assets/images/Dan.png'},
    {name: 'Miley', data: {age: 8, mass: '30 kg', sidekick: 'Emily'}, image: 'assets/images/Emily.png'},
    {name: 'Aaron', data: {age: 4, mass: '10 kg', sidekick: 'Mike'}, image: 'assets/images/Mike.png'}
  ];
  crew=[];
  constructor() { }

  ngOnInit() {
  }

  addToCrew(person : object){
    if(person.name!=null && !this.crew.includes(person)){
      this.crew.push(person)
    }
  }
  changeMissionName(name: string){
    this.missionName = name;
    return false;
 }

}
