import {Component, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  @Output() submitEvent: EventEmitter<object> = new EventEmitter();
  @ViewChild('mainForm', {static: false}) form;
  todoForm = {
    title: '',
    body: '',
  };

  onSubmit(form) {
    this.submitEvent.emit({...this.todoForm});
    form.resetForm();
  }

}
