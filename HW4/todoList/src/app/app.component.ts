import { Component } from '@angular/core';
import { Todo } from './interfaces/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList: Array<Todo> = [
    {
      id: 1,
      title: 'Learn JavaScript',
      isCompleted: false,
      body: 'Some text',
    },
    {
      id: 2,
      title: 'Learn Angular',
      isCompleted: false,
      body: 'Some text',
    }
  ];

  tasksList: Array<Todo> = this.todoList;
  statusFilter: string = 'all';


  deleteTodoItem(id: number): void {
    this.todoList = this.todoList.filter((item: Todo) => item.id !== id);
    this.renderList();
  }

  completeTodoItem(id: number): void {
    this.todoList = this.todoList.map((item: Todo) => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted;
      }
      return item;
    });
    this.renderList();
  }
  renderList(): void {
    if (this.statusFilter === 'completed') {
      this.showCompleted();
    } else if (this.statusFilter === 'outstanding') {
      this.showOutstanding();
    } else {
      this.showAll();
    }
  }

  showAll(): void {
    this.statusFilter = 'all';
    this.tasksList = this.todoList;
  }

  showCompleted(): void {
    this.statusFilter = 'completed';
    this.tasksList = this.todoList.filter((item: Todo) => item.isCompleted === true);
  }

  showOutstanding(): void {
    this.statusFilter = 'outstanding';
    this.tasksList = this.todoList.filter( (item: Todo) => item.isCompleted === false);
  }

  onFormSubmit(todo): void {
    const newTodo: Todo = {
      ...todo,
      isCompleted: false,
      id: Math.random()
    };
    this.todoList.push(newTodo);
  }

  saveTodoItem(item): void {
    const editedItem = this.todoList.find(item => item.id === item.id);
    editedItem.title = item.title;
    editedItem.body = item.body;
  }
}
