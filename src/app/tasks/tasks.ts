import { Component, inject, Input } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  standalone: false,
})
export class Tasks {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) userName!: string;

  private taskService = inject(TaskService);

  isAddingTask = false;

  get selectedUserTasks() {
    return this.taskService.getTasks(this.userId);
  }

  onCompleteTask(id: number) {
    this.taskService.removeTask(id);
  }

  onStartAddingTask() {
    this.isAddingTask = true;
  }

  onCancelAddingTask() {
    this.isAddingTask = false;
  }
}
