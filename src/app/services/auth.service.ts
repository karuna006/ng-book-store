import { Injectable } from '@angular/core';
import { AddService } from "./add.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private addservice:AddService) { }

  getUserDetails(username:any,password:any)
  {
    
  }
}
