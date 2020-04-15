import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Injectable} from "@angular/core";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		let token = window.localStorage.getItem('token');
		let headers = {}

		if (token) {
			headers['Authorization'] = 'Bearer ' + token;

			const cloned = request.clone({
				setHeaders: headers
			});

      return next.handle(cloned);
		}
		
		return next.handle(request);
	}
}