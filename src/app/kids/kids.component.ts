import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {
  missionName : string ='housework'
  kids = [
    {name: 'Liano', data: {age: 12, mass: '45 kg', sidekick: 'Liano'}, image: 'assets/images/Liano.png'},
    {name: 'Ethan', data: {age: 11, mass: '50 kg', sidekick: 'Ethan'}, image: 'assets/images/Ethan.png'},
    {name: 'Diamen', data: {age: 9, mass: '40 kg', sidekick: 'Diamen'}, image: 'assets/images/Diamen.png'},
    {name: 'Miley', data: {age: 8, mass: '30 kg', sidekick: 'Miley'}, image: 'assets/images/Miley.png'},
    {name: 'Aaron', data: {age: 4, mass: '10 kg', sidekick: 'Aaron'}, image: 'assets/images/Aaron.png'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
