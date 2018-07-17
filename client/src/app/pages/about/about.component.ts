import {Component, OnInit} from '@angular/core';
import {AuthService} from "@services/auth.service";
import {ActivatedRoute} from "@angular/router";
import {tap} from "rxjs/internal/operators";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  isAllowed = false;

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    let token = null;

    let $paramHandler = this.activatedRoute.queryParams.pipe(
      tap(queryParams => token = queryParams.token),
    ).subscribe();

    if (token) {
      this.authService.authenticate(token).subscribe(res => {
        this.isAllowed = true;
        $paramHandler.unsubscribe();
        console.log(AuthService.getToken());
      }, (e) => {
        console.log(e);
      });
    }

    this.isAllowed = AuthService.isAllowed();
  };

  fetchPdf(): Observable<Response>|boolean {
    /**
     * @type {boolean | Observable<any>}
     */
    let $pdf = this.authService.fetchPdf();

    if (typeof $pdf === "boolean") return false;

    $pdf.subscribe((res) => {
      window.location.assign(URL.createObjectURL(res));
    })
  }
}
