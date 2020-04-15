import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
	loginForm: FormGroup;
  invalidLogin: boolean = false;

  constructor(private formBuilder: FormBuilder, 
  	private router: Router, 
  	private authService: AuthService) { }

  ngOnInit(): void {
  	this.loginForm = this.formBuilder.group({
  		username:[""],
  		password:[""]
  	})
  }

  onSubmit() {
  	const loginPayload = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }
  	
  	this.authService.login(loginPayload).subscribe(
  		res => {
  		  window.localStorage.setItem('token', res.body.result.token);
        this.authService.isLoggedIn.next(true);
        this.router.navigate(['planets']);
	  	},
  		err => { this.invalidLogin = true; }
  	)
  }

}
