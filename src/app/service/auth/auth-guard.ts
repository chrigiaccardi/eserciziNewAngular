import { CanActivateFn } from '@angular/router';
import { Auth } from './auth';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const auth = inject(Auth)
  return auth.isAuthenticated();
};
