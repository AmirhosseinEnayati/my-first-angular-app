import { Component, signal, computed } from '@angular/core';

const users = [
  { name: 'amirhossein', avatar: 'user_amirhossein.jpg' },
  { name: 'jennifer', avatar: 'user_jennifer.jpg' },
];

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  selectedUser = signal(users[0]);
  imagePath = computed(()=>'assets/users/' + this.selectedUser().avatar);

  onSelectUser() {
    let randomIndex = Math.floor(Math.random() * users.length);
    this.selectedUser.set(users[randomIndex]);
  }
}
