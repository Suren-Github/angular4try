import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup',
  templateUrl: './keyup.component.html',
  styleUrls: ['./keyup.component.css']
})
export class KeyupComponent {

  // constructor() { }

  // ngOnInit() {
  // }

  enteredText = '';
  onEnteredText = '';  
  onEnteredText2 = '';
  keyUpField = "Hello World";

  clearKeyUpText(event: any) {
    this.keyUpField = '';
    //debugger;
    this.enteredText = '';
  };

  onKeyUp(event: KeyboardEvent) {
    this.enteredText += (<HTMLInputElement>event.target).value + " |";
  };

  onKeyEnter(value: string) {
    //debugger;
    console.log("value on enter: " + value);
    this.onEnteredText = value + ".";
  };

  onKeyEnter2(value: any) {
    this.onEnteredText2 = value;
  };
}
