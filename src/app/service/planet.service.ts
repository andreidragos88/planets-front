import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";

@Injectable()
export class PlanetService {

	constructor(private http: HttpClient) { }

	getAll() : Observable<HttpResponse<ApiResponse>> {
		return this.http.get<ApiResponse>('http://localhost/abacapi/planets', {observe: 'response'});
	}

	update(payload): Observable<HttpResponse<ApiResponse>> {
		return this.http.post<ApiResponse>('http://localhost/abacapi/planets/' + payload.id, payload, {observe: 'response'});
	}

	getById(id): Observable<HttpResponse<ApiResponse>> {
		return this.http.get<ApiResponse>('http://localhost/abacapi/planets/'+id, {observe: 'response'});
	}
}