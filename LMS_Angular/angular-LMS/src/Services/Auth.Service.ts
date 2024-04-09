import { Injectable } from "@angular/core";
import { UserService } from "./User.Service";
import { User } from "../app/Model/User.Model.";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    constructor(private userService: UserService, private http: HttpClient) {}
  
    login(userName: string, password: string): Observable<boolean> {
      const url = 'https://localhost:7034/api/User/login';
      const body = { userName, password };
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
  
      return new Observable<boolean>((observer) => {
        this.http.post<any>(url, body, { headers }).subscribe({
          next: response => {
            const token = response && response.token;
            if (token) {
              localStorage.setItem('currentUser', JSON.stringify({ username: userName, token: token }));
              console.log(localStorage.getItem('jwtToken'))
              observer.next(true);
            } else {
              observer.next(false);
            }
            observer.complete();
          },
          error: err => {
            console.error('API Error:', err);
            observer.next(false);
            observer.complete();
          }
        });
      });
    }
  
    logout(): void {
      localStorage.removeItem('currentUser');
    }
  
    isLoggedIn(): boolean {
      return !!localStorage.getItem('currentUser');
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