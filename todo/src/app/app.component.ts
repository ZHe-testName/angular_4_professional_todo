import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();

  getName() {
    return this.model.user;
  }

  getRadioBtnArr() {
    return this.model.radioBtnArr;
  }

  getTodoItems() {
    return this.model.items.filter(i => !i.done);
  }

  // switchTodoList(e: MouseEvent) {
  //   console.dir(e.target);
  // }

  addItem(el: HTMLInputElement) {
    if(el.value.trim()) {
      this.model.items.push(new TodoItem(el.value, false));

      el.value = '';
    };
  }
}
