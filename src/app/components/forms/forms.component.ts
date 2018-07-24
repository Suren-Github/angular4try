import { Component, OnInit } from '@angular/core';

import { Hero } from '../../models/heroes.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  constructor() { }

  teams = ['Dire', 'Radiant'];

  model = new Hero(1, 'Ogre Magi', this.teams[0]);
  //model = {name: 'test'};

  submitted = false;

  onSubmit = () => {
    this.submitted = true;
  };

  get diagnostic() {
    return JSON.stringify(this.model);
  };

}
