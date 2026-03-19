import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DemoDataService } from '../http-intro/demo-data-service';

export const authGuard
: CanActivateFn = (route, state) => {
  // Inject the service
  const authService = inject(DemoDataService);
  const router = inject(Router);
  const isLoggedIn = authService.login();
  if (isLoggedIn) console.log("You are logged in")
  else console.log("Please login first")

  return isLoggedIn ? true : router.createUrlTree(['/lazy']);
};
