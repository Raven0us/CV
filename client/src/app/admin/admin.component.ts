declare const particlesJS: any;

import {Component, OnInit} from '@angular/core';

import {CompanyService} from "@services/company.service";
import * as particlesJS from "particles.js";

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: [
    './admin.component.scss'
  ]
})

export class AdminComponent {
  constructor() {}
}
