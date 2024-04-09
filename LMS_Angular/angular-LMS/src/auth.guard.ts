import { inject } from "@angular/core";
import { AuthService } from "./Services/Auth.Service";
import { Router } from "@angular/router";

export const LoggedInCanActivate = () => {
    const authService = inject(AuthService)
    const router = inject(Router)
    console.log('checking user authentication.............')
    if (authService.isLoggedIn()) {
        return true;
      } else {
        router.navigate(['/login']);
        return false;
      }
}

export const UnAuthCanActivate = () => {
    const authService = inject(AuthService)
    const router = inject(Router)
    if (!authService.isLoggedIn()) {
        return true;
    } else {
        router.navigate(['/dashboard']);
        return false;
    }
}