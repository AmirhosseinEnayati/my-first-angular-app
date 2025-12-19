import { Component, inject, Input } from '@angular/core';
import { taskModel } from './task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.html',
  styleUrl: './task.css',
  standalone: false,
})
export class Task {
  @Input({ required: true }) task!: taskModel;

  taskService = inject(TaskService);

  onComplete() {
    this.taskService.removeTask(this.task.id);
  }
}
