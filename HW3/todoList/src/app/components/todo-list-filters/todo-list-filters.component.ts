import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-list-filters',
  templateUrl: './todo-list-filters.component.html',
  styleUrls: ['./todo-list-filters.component.css']
})
export class TodoListFiltersComponent {
  @Output() showAllEvent = new EventEmitter;
  @Output() showCompletedEvent = new EventEmitter;
  @Output() showOutstandingEvent = new EventEmitter;

  showAll(): void {
    this.showAllEvent.emit();
  }

  showCompleted(): void {
    this.showCompletedEvent.emit()
  }

  showOutstanding(): void {
    this.showOutstandingEvent.emit()
  }
}
