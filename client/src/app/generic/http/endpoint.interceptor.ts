import {environment} from '@env/environment';

import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable()

export class EndpointInterceptor implements HttpInterceptor {
  /**
   * Prepends the endpoint defined in environment file so we can specify the relative route and not the full route each time
   *
   * @inheritDoc
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({url: environment.endpoint + request.url});
    return next.handle(request);
  }
}
