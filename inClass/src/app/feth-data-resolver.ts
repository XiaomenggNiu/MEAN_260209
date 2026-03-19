import { ResolveFn } from '@angular/router';

export const fethDataResolver: ResolveFn<{user: string}> = (route, state) => {
  
  return {user: "Miranda"};
};
