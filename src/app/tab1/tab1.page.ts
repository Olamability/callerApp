import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  screenTest: []= [];

  constructor() {}

  buttonText(event:any){
    console.log('new value', this.screenTest);
    
    console.log("testing my keypad", event);
    this.screenTest += event;
    
  }
  deleteText(event:any){
    console.log('new value', this.screenTest.pop());
    this.screenTest = event

  }

  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      window.location.reload();
      // event.target.complete();
    }, 500);
  };

}
