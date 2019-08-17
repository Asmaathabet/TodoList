import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'todolist';

  constructor(){
    this.changeTitle("ToDo")
  }

  changeTitle(title:string):void {
    this.title = title;
  }
}
