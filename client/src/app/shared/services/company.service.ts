import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()

export class CompanyService {
  route = "/companies";

  constructor(private http: HttpClient) {}

  getCompanies(): Promise<any> {
    return this.http.get(this.route, {
      reportProgress: true
    }).toPromise();
  }
}
