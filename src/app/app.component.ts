import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  listItems = [
    {id: 1, name: 'India'},
    {id: 1, name: 'America'},
    {id: 1, name: 'China'}
  ];

  constructor() { }
  
  onMovedItem(item: any, list: any[]): void {
    list.splice(list.indexOf(item), 1);
  }

  onRemoveAttribute(item: any) {
      this.listItems.splice(this.listItems.indexOf(item), 1);
  }

}
