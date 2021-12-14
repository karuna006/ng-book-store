import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddService } from "./services/add.service";
import { Router } from '@angular/router';
import { NotiService } from "./services/noti.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate
{

  constructor(private addservice:AddService,private router:Router,private noti:NotiService){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
      if(!this.addservice.isLoggedIn)
      {
        this.router.navigate(['/login']);
        this.noti.showError("Please login to your account !!", "Sorry");
      }
      return this.addservice.isLoggedIn;
    }
}
