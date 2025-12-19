import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Header } from './header/header';
import { Tasks } from './tasks/tasks';
import { User } from './user/user';
import { Card } from './shared/card/card';
import { Task } from './tasks/task/task';
import { NewTask } from './tasks/new-task/new-task';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, Header, Card, User, Tasks, Task, NewTask],
  bootstrap: [App],
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}
