import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { EmptyMsgComponent } from './components/empty-msg/empty-msg.component';
import { TodoListFiltersComponent } from './components/todo-list-filters/todo-list-filters.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
    EmptyMsgComponent,
    TodoListFiltersComponent,
    TodoFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
