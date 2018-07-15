import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()

export class TextService {
  route = "/texts";

  constructor(private http: HttpClient) {}

  getTexts(): Promise<any> {
    return this.http.get(this.route).toPromise();
  }
}
