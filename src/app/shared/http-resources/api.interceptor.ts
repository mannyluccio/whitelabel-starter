import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  private api = environment.api;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let apiReq: any = req;

    // read translations json from localhost instead of API url
    if (!req.url.includes('.json')) {
      apiReq = req.clone({ url: this.api + req.url });
    }
    return next.handle(apiReq);
  }
}
