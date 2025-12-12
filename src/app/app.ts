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
    { name: 'amirhossein', avatar: 'user_amirhossein.jpg' },
    { name: 'jennifer', avatar: 'user_jennifer.jpg' },
  ];

  protected readonly title = signal('my-first-angular-app');
}
