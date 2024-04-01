import { Injectable } from "@angular/core";
import { UserService } from "./User.Service";
import { User } from "../app/Model/User.Model.";

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    constructor(private userService: UserService) {}
  
    login(username: string, password: string): boolean {
      //authentication
      console.log(this.userService.getUsers())
      const user = this.userService.getUsers().find(u => u.username === username && u.password === password && u.isBlock === false);
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true;
      } else {
        return false;
      }
    }
  
    logout(): void {
      localStorage.removeItem('currentUser');
    }
  
    isLoggedIn(): boolean {
      return localStorage.getItem('currentUser') !== null;
    }

    getCurrentUser(): User {
        const currentUser = localStorage.getItem('currentUser');
        return currentUser ? JSON.parse(currentUser) : null;
      }
    
    getCurrentUserRoleType(): number {
        const currentUser = this.getCurrentUser();
        return currentUser ? currentUser.roleType-1 : 0;
    }

    checkCurrentPassword(password: string): boolean {
      const currentUser = this.getCurrentUser();
      return currentUser ? currentUser.password === password : false;
    }

    getUserId(): number {
      const currentUser = this.getCurrentUser();
      return currentUser ? currentUser.userId : 0;
    }
  }