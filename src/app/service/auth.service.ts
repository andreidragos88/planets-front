import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import { HttpClient, HttpResponse } from '@angular/common/http';
import {ApiResponse} from "../model/api.response";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	isLoggedIn = new Subject();
  constructor(private http: HttpClient) { }

  redirectUrl: string;

  login(loginPayload) : Observable<HttpResponse<ApiResponse>> {
		return this.http.post<ApiResponse>('http://localhost/abacapi/users/token', loginPayload, {observe: 'response'});
	}

  logout(): void {
  	window.localStorage.removeItem("token");
    this.isLoggedIn.next(false);
  }

  isCaptain() : Observable<HttpResponse<ApiResponse>> {
		return this.http.get<ApiResponse>('http://localhost/abacapi/users/is-captain', {observe: 'response'})/*.toPromise()*/;
	}
}
