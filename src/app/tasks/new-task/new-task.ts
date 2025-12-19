import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
  standalone: false
})
export class NewTask {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  private taskService = inject(TaskService);
  
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onClose() {
    this.close.emit();
  }
  onSubmit() {
    this.taskService.addTask({
      title: this.enteredTitle,
      time: this.enteredDate,
      summary: this.enteredSummary
    }, this.userId)
    this.close.emit();
  }
}
