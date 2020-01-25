import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Todo} from '../../interfaces/Todo';
import { CrudTodo } from '../../interfaces/CrudTodo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {
  @Input() item: Todo;
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter();
  @Output() completeEvent: EventEmitter<number> = new EventEmitter();
  @Output() saveEvent: EventEmitter<object> = new EventEmitter();

  todoForm: CrudTodo = {
    title: '',
    body: '',
  };

  completeBtn: string = 'Complete';
  editBtn: string = 'Edit';
  formEdit: boolean = false;

  deleteItem(): void {
    this.deleteEvent.emit(this.item.id);
  }

  completeItem(): void {
    if (this.item.isCompleted) {
      this.completeBtn = 'Complete';
    } else {
      this.completeBtn = 'Completed';
    }
    this.completeEvent.emit(this.item.id);
  }

  editItem(): void {
    if (this.formEdit) {
      this.editBtn = 'Edit';
    } else {
      this.editBtn = 'Cancel';
    }
    this.formEdit = !this.formEdit;
    this.todoForm.title = this.item.title;
    this.todoForm.body = this.item.body;
  }

  onSubmit(): void {
    this.saveEvent.emit({id: this.item.id, ...this.todoForm});
    this.formEdit = !this.formEdit;
    this.editBtn = 'Edit';
  }
}
