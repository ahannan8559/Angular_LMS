import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/Auth.Service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../Services/User.Service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './app-login.component.html',
  styleUrl: './app-login.component.css'
})
export class AppLoginComponent implements OnInit{
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private authService: AuthService,private router: Router,private userService: UserService) {}
  ngOnInit(): void {
    console.log(this.userService.getUsers())
  }

  login(): void {
    console.log(this.username)  
    const isAuthenticated = this.authService.login(this.username, this.password);
    if (isAuthenticated) {
      this.router.navigate(['/dashboard'])
    } else {
      this.loginError = true;
    }
  }
}
