import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/User.Service';
import { FormsModule } from '@angular/forms';
import { User } from '../Model/User.Model.';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-block-users',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './block-users.component.html',
  styleUrl: './block-users.component.css'
})
export class BlockUsersComponent implements OnInit{
  search:string = ''
  users: User[] = [];
  
  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.users = this.userService.getUsers().filter(user => user.isBlock === false);
  }

  onSearch(){
    this.users = this.userService.getUsers().filter(user =>
      user.username.toLowerCase().includes(this.search.toLowerCase()) && user.isBlock === false
    )
  }

  OnBlock(userId: number){
    this.userService.blockUser(userId)
    this.users = this.userService.getUsers().filter(user => user.isBlock === false);
  }
}
