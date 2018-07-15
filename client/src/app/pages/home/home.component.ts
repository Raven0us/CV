import {Component, OnInit} from '@angular/core';
import {TextService} from "@services/text.service";
import {CompanyService} from "@services/company.service";
import {Company} from "@models/company.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [TextService, CompanyService]
})

export class HomeComponent implements OnInit {
  constructor(private textService: TextService, private companyService: CompanyService) {
  }

  texts: any;
  companies: Company[];

  /**
   * @inheritDoc
   */
  ngOnInit(): void {
    this.textService.getTexts().then((res) => {
      this.texts = res.data;
    });

    this.companyService.getCompanies().then((res) => {
      this.companies = res.data;
    });
  }
}
