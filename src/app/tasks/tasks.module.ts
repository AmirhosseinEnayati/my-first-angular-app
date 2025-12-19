import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/card/card.module';

import { Tasks } from './tasks';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';

@NgModule({
  declarations: [Tasks, Task, NewTask],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [Tasks],
})
export class TasksModule {}
