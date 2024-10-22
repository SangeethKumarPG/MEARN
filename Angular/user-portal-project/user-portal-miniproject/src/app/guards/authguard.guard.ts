import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authguardGuard: CanActivateFn = (route, state) => {
  const authStatus = inject(AuthService);
  const router = inject(Router);
  if(authStatus.isLoggedIn()){
    return true;
  }else{
    alert("Please login to access this page");
    router.navigateByUrl('');
    return false;
  }
  return true;
};
