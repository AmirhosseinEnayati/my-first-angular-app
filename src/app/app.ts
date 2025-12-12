import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, User],
})
export class App {
  users = [
    { id: 'u1', name: 'amirhossein', avatar: 'user_amirhossein.jpg' },
    { id: 'u2', name: 'jennifer', avatar: 'user_jennifer.jpg' },
  ];

  protected readonly title = signal('my-first-angular-app');

  onSelectUser(id: string) {
    console.log('selected User:' + id);
  }
}
