import { Component, Input } from '@angular/core';
import { Task } from './task/task';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) userName!: string;
  userTasks = [
    {
      id: 1,
      title: 'Design Landing Page',
      time: '2025-01-10 09:00',
      summary: 'Create initial layout and wireframe',
      userId: 'u1',
    },
    {
      id: 2,
      title: 'Fix Login Bug',
      time: '2025-01-10 11:30',
      summary: 'Resolve authentication issue on mobile',
      userId: 'u2',
    },
    {
      id: 3,
      title: 'Prepare Presentation',
      time: '2025-01-10 14:00',
      summary: 'Slides for weekly meeting',
      userId: 'u2',
    },
    {
      id: 4,
      title: 'API Integration',
      time: '2025-01-11 10:00',
      summary: 'Connect frontend to tasks API',
      userId: 'u2',
    },
    {
      id: 5,
      title: 'Write Unit Tests',
      time: '2025-01-11 13:00',
      summary: 'Add coverage for task service',
      userId: 'u2',
    },
    {
      id: 6,
      title: 'Update Documentation',
      time: '2025-01-12 09:30',
      summary: 'Refresh README and setup steps',
      userId: 'u2',
    },
    {
      id: 7,
      title: 'Code Review',
      time: '2025-01-12 15:00',
      summary: 'Review pull requests',
      userId: 'u1',
    },
    {
      id: 8,
      title: 'Deploy to Staging',
      time: '2025-01-13 16:00',
      summary: 'Deploy latest build to staging server',
      userId: 'u2',
    },
  ];

  
  get selectedUserTasks() {
    return this.userTasks.filter(x=>x.userId == this.userId)
  }
  
}
