import { Component, EventEmitter, inject, Input, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
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
