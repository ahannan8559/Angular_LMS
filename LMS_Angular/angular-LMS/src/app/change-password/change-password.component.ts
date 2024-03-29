import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Services/Auth.Service';
import { UserService } from '../../Services/User.Service';


@Component({
    selector: 'app-change-password',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './change-password.component.html',
    styleUrl: './change-password.component.css'
  })

export class ChangePasswordComponent {
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  passwordsMismatch: boolean = false;
  incorrectCurrentPassword: boolean = false;

  constructor(private authService: AuthService, private userService: UserService) { }

  changePassword() {
    this.passwordsMismatch = false;
    this.incorrectCurrentPassword = false;

    if (this.newPassword !== this.confirmPassword) {
      this.passwordsMismatch = true;
      return;
    }

    if (!this.authService.checkCurrentPassword(this.currentPassword)) {
      this.incorrectCurrentPassword = true;
      return;
    }

    const userID = this.authService.getUserId()
    this.userService.updateUserPassword(userID, this.newPassword)

    this.currentPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';
  }

  validateNewPassword() {
    if (this.confirmPassword && this.newPassword !== this.confirmPassword) {
      this.passwordsMismatch = true;
    } else {
      this.passwordsMismatch = false;
    }
  }

  validateConfirmPassword() {
    if (this.newPassword && this.newPassword !== this.confirmPassword) {
      this.passwordsMismatch = true;
    } else {
      this.passwordsMismatch = false;
    }
  }

  validateCurrentPassword(){
    console.log(this.incorrectCurrentPassword)
    this.incorrectCurrentPassword = this.authService.checkCurrentPassword(this.currentPassword)
    console.log(this.incorrectCurrentPassword)
  }
}
