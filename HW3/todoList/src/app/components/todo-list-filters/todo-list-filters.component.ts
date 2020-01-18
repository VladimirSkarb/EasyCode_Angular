import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-todo-list-filters',
  templateUrl: './todo-list-filters.component.html',
  styleUrls: ['./todo-list-filters.component.css']
})
export class TodoListFiltersComponent {
  @Output() showAllEvent: EventEmitter<number> = new EventEmitter();
  @Output() showCompletedEvent: EventEmitter<number> = new EventEmitter();
  @Output() showOutstandingEvent: EventEmitter<number> = new EventEmitter();

  showAll(): void {
    this.showAllEvent.emit();
  }

  showCompleted(): void {
    this.showCompletedEvent.emit();
  }

  showOutstanding(): void {
    this.showOutstandingEvent.emit();
  }
}
