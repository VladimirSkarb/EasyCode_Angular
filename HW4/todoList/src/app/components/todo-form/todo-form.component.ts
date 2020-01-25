import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import { CrudTodo } from '../../interfaces/CrudTodo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  @Output() submitEvent: EventEmitter<CrudTodo> = new EventEmitter();
  @ViewChild('mainForm', {static: false}) form: NgForm;

  todoForm: CrudTodo = {
    title: '',
    body: '',
  };

  onSubmit() {
    this.submitEvent.emit({...this.todoForm});
    this.form.resetForm();
  }
}
