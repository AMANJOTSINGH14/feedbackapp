import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
userId:any;
  constructor(private authToken:AuthService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokens = this.authToken.getToken();
    this.authToken.userSubject.subscribe((res) => {
      this.userId = res;
      console.log(res);
    });
    let haders = new HttpHeaders({
      Authorization: '' + tokens,
    });

    haders = haders.set('UserId', this.userId);
    if (!this.userId || this.userId === '') {
    console.log(req)
      return next.handle(req);
    }


      const auth = req.clone({
        // headers: req.headers.set("Authorization", '' + tokens)
        headers: haders,
      });

      console.log(auth);
      return next.handle(auth);

  }
}
