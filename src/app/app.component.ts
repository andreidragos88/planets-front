import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loggedIn: boolean

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  	this.authService.isLoggedIn.subscribe((data:boolean) => {
  		this.loggedIn = data;
  	})

  	this.loggedIn = Boolean(window.localStorage.getItem('token'));
  }

  logout() {
  	this.authService.logout();
  	this.router.navigate(['login']);
  }
}
