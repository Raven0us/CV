import {Component, OnInit} from '@angular/core';

declare const particlesJS: any;

import * as particlesJS from "particles.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
    particlesJS.load('particles', "assets/json/particles.json");
  }
}
