import { Component, Input } from '@angular/core';

interface taskModel {
  id: number;
  title: string;
  time: string;
  summary: string;
}

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: taskModel;
}
