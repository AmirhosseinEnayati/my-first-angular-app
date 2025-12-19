import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Header } from './header/header';
import { Tasks } from './tasks/tasks';
import { User } from './user/user';
import { Task } from './tasks/task/task';
import { NewTask } from './tasks/new-task/new-task';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/card/card.module';

@NgModule({
  declarations: [App, Header, User, Tasks, Task, NewTask],
  bootstrap: [App],
  imports: [BrowserModule, FormsModule, SharedModule],
})
export class AppModule {}
