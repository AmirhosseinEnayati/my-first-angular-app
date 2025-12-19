import { Component, Input, Output, EventEmitter } from '@angular/core';
import { userModel } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  standalone: false
})
export class User {
  @Input({ required: true }) user!: userModel;
  @Input({ required: true }) isSelected!: boolean;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
