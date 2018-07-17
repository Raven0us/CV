import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {AuthService} from "@services/auth.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

  constructor() {

  }

  /**
   * Prepends the endpoint defined in environment file so we can specify the relative route and not the full route each time
   *
   * @inheritDoc
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = AuthService.getToken();

    console.log(token);
    if (token) {
      let headers = request.headers.set("X-Access-Token", token);

      request = request.clone({
        headers: headers
      });
    }

    return next.handle(request);
  }
}
