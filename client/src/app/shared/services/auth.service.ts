import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import * as moment from "moment";
import {shareReplay, tap} from "rxjs/internal/operators";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  route = "/auth";

  constructor(private httpClient: HttpClient) {
  }

  authenticate(token: string): Observable<any> {
    let params = new HttpParams().set("token", token);

    return this.httpClient.get(this.route, {params}).pipe(
      tap(authResult => AuthService.setSession(authResult)),
      shareReplay()
    );
  }

  private static setSession(authResult) {
    const expiresIn = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('token', authResult.token);
    localStorage.setItem('expires_in', JSON.stringify(expiresIn.valueOf()));
  }

  public static isAllowed() {
    return moment().isBefore(AuthService.getExpiration());
  }

  static getExpiration() {
    const expiration = localStorage.getItem("expires_in");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  public static getToken() {
    return localStorage.getItem('token') ? localStorage.getItem('token') : null;
  }
}
