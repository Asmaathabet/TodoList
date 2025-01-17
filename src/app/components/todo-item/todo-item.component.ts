import { Component, OnInit , Input , EventEmitter , Output} from '@angular/core';
import {TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo = Todo; 
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  // set Dynamic classes 
  setClasses() {
    let classes = {
      todo: true ,
      'is-complete': this.todo['completed']
    }
    return classes ;
  }

  // make Input OnToggle method 

  onToggle(todo){
    // Toggle in UI
    todo.completed = !todo.completed;

    // Toggle in Server 
    this.todoService.toggleCompleted(todo).subscribe( todo => {
      console.log(todo);
    })
  }

  onDelete(todo){
   this.deleteTodo.emit(todo);
  }
}
