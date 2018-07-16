import {Component, OnInit} from '@angular/core';
import {AuthService} from "@services/auth.service";
import {ActivatedRoute} from "@angular/router";
import {tap} from "rxjs/internal/operators";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  isAllowed = false;

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    let token = null;

    let $paramHandler = this.activatedRoute.queryParams.pipe(
      tap(queryParams => token = queryParams.token),
    ).subscribe();

    if (token) {
      this.authService.authenticate(token).subscribe((res) => {
        console.log(res);
        this.isAllowed = true;
        $paramHandler.unsubscribe();
        console.log(AuthService.getToken());
      }, (e) => {
        console.log(e);
      });
    }
  };
}
