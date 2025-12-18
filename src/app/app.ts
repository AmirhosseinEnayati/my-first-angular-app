import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: false
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
