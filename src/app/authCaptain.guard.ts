import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "./service/auth.service";
import {Router} from "@angular/router";
import { HttpClient, HttpResponse } from '@angular/common/http';
import {ApiResponse} from "./model/api.response";
import { catchError, map} from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthCaptainGuard implements CanActivate {
	constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  	
  	return this.authService.isCaptain().pipe(
			map ( data => {return true} ),
			catchError((err) => {
        this.router.navigate(['/planets']);
        return of(false);
      })
		);
  }
}
