import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddService } from "../../services/add.service";
import { NotiService } from "../../services/noti.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username!:string;
  password!:string;
  loginData!:any[];
  title:string = 'Book Store';
  constructor(private addservice:AddService,private noti:NotiService,private router:Router) { }

  ngOnInit(): void {
      if(this.addservice.isLoggedIn)
      {
        this.router.navigate(['/home']);        
      }
  }

  loginUser()
  {
    this.addservice.getLogindata(this.username,this.password).subscribe(
      data=>
      {
        this.loginData = data;
        if(this.loginData.length != 0)
        {
          // this.addservice.setLoggedIN(true);
          const jsonData = JSON.stringify(this.loginData)
          localStorage.setItem('userdata', jsonData);
          this.router.navigate(['/home']);
          // console.log(localStorage.getItem('userdata1'));
          this.noti.showSuccess("login successfully !!", "Success");
        }
        else
        {
          this.noti.showError("Sorry username or password not matched !!", "Warning");
        }        
      }
    );    
  }
}
