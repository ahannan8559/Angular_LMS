import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../Services/Auth.Service';
import { RoleType } from '../../Role-type.enum'
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { CommonModule } from '@angular/common';
import { SuperuserDashboardComponent } from '../superuser-dashboard/superuser-dashboard.component';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';
import { User } from '../Model/User.Model.';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AdminDashboardComponent, CommonModule, SuperuserDashboardComponent, UserDashboardComponent, AddUserComponent, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  roleName: string = ''
  constructor(private authService: AuthService,private router: Router) {}
  
  ngOnInit(): void {
    this.roleName = this.authService.getCurrentUserRoleType() !== null 
    ? RoleType[this.authService.getCurrentUserRoleType()!] 
    : 'Unknown Role';
    
    console.log(this.roleName)
  }
}
