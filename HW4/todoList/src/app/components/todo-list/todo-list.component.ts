import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Todo } from '../../interfaces/Todo';
import { CrudTodo } from '../../interfaces/CrudTodo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() list: Array<Todo>;
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter();
  @Output() completeEvent: EventEmitter<number> = new EventEmitter();
  @Output() saveEvent: EventEmitter<object> = new EventEmitter();

  onDeleteItem(id: number): void {
    this.deleteEvent.emit(id);
  }

  onCompleteItem(id: number): void {
    this.completeEvent.emit(id);
  }

  onSaveItem(item: CrudTodo): void {
    this.saveEvent.emit(item);
  }
}
