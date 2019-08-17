import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';

const httpOptions ={
  headers : new HttpHeaders({
   'Content-Type': 'application/json' 
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosURL= 'https://jsonplaceholder.typicode.com/todos';
  todosLimit ="?_limit=10";

  constructor(private http:HttpClient) { }

   // Get Todos 
  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosURL}${this.todosLimit}`);
  }

  // Toggel completed 
  toggleCompleted(todo : Todo):Observable<any>{
    const url = `${this.todosURL}/${todo.id}`;
    return this.http.put(url ,todo , httpOptions)
  }
}
