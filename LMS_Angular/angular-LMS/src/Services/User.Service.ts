import { Injectable } from '@angular/core';
import { User } from '../app/Model/User.Model.';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private users: User[] = [];

  constructor() {
    this.users = [
      { userId: 1, roleType:1 ,username: 'hannan1', email: 'hannan@example.com', password: '123', firstName: 'John', lastName: 'Doe', isBlock: false },
      { userId: 2, roleType:2 ,username: 'hannan2', email: 'hannantwo@example.com', password: '123', firstName: 'Jane', lastName: 'Smith', isBlock: false },
      { userId: 3, roleType:3 ,username: 'hannan3', email: 'hannanthree@example.com', password: '123', firstName: 'Jane', lastName: 'Smith', isBlock: false }
    ];
  }

  getUsers(): any[] {
    return this.users;
  }

  addUser(user: any): void {
    console.log(user)
    this.users.push(user);
  }

  blockUser(userId: number): void {
    const userIndex = this.users.findIndex(user => user.userId === userId);
    if (userIndex !== -1) {
      this.users[userIndex].isBlock = true;
    } else {
      console.error('User not found');
    }
  }

  updateUserPassword(userId: number, newPassword: string): void {
    const user = this.users.find(u => u.userId === userId);
    if (user) {
      user.password = newPassword;
    } else {
      console.error('User not found');
    }
  }
}