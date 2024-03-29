import { Component, ViewChild } from '@angular/core';
import { UserService } from '../../Services/User.Service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})

export class AddUserComponent {
  formData: any = {
    firstName: '',
    lastName: '',
    email: '',
    roleType: 'user',
    password: '',
    username: ''
  };
  usernameExists: boolean = false;

  constructor(private userService: UserService) {}

  submitForm() {
    if (!this.formData.firstName || !this.formData.lastName || !this.formData.email || !this.formData.username || !this.formData.password) {
      return;
    }

    console.log(this.formData)

    // Check if username already exists
    if (true) {
      this.usernameExists = true;
      return;
    }

    // Add user if username is unique
    //this.userService.addUser(this.formData);
  }

  get email() { return this.formData.controls.email; }
  get username() { return this.formData.controls.username; }
  get password() { return this.formData.controls.password; }
}
