import { Component, EventEmitter, Input, Output } from '@angular/core';
import { taskModel } from './task.model';
import { Card } from "../../shared/card/card";

@Component({
  selector: 'app-task',
  imports: [Card],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: taskModel;
  @Output() complete = new EventEmitter<number>();

  onComplete(){
    this.complete.emit(this.task.id);
  }
}
