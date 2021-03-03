import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatGuard implements CanActivate {

  constructor(private auth: AuthService, private router : Router){}

  
  canActivate(): boolean | Promise<boolean> {
    return this.auth.loggedIn?true:this.router.navigate(['/login']);
  }
  
}
