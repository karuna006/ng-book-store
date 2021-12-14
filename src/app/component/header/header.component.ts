import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotiService } from "../../services/noti.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private noti:NotiService) { }

  ngOnInit(): void {
  }

  loggout()
  {
    localStorage.removeItem('userdata');
    this.router.navigate(['/login']);
    this.noti.showSuccess("Logged out successfully !!", "Success");
  }
}
