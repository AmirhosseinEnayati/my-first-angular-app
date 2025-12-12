import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, User, Tasks],
})
export class App {
  protected readonly title = signal('my-first-angular-app');

  users = [
    { id: 'u1', name: 'amirhossein', avatar: 'user_amirhossein.jpg' },
    { id: 'u2', name: 'jennifer', avatar: 'user_jennifer.jpg' },
  ];

  selectedId?: string;

  get selectedUser() {
    return this.users.find((x) => x.id == this.selectedId)!;
  }

  onSelectUser(id: string) {
    this.selectedId = id;
  }
}
