import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/Auth.Service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../Services/User.Service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './app-login.component.html',
  styleUrl: './app-login.component.css',
  providers: [HttpClientModule]
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
    this.authService.login(this.username, this.password)
      .subscribe({
        next: success => {
          if (success) {
            console.log('Login successful');
            this.router.navigate(['/dashboard'])
          } else {
            console.log('Login failed');
            this.loginError = true;
          }
        },
        error: err => {
          console.error('Login error:', err);
        }
      });
  }
}
