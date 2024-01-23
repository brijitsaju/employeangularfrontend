import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authStatus=inject (AuthService)
  const router=inject(Router)

  if(authStatus.islogged()){
    return true;
  }else{
    alert('please login')
    router.navigateByUrl("")
    return false
  }
  return true;
};
