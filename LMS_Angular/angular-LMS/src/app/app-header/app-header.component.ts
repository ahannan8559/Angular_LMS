import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/Auth.Service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../Model/User.Model.';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css'
})
export class AppHeaderComponent implements OnInit {
  user: User|null = null
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser()
    console.log(this.user)
  }

  isAuthenticated(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

}
