import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Submission} from "@models/submission.model";

@Injectable()

export class SubmissionService {
  route = "/submissions/create";

  constructor(private http: HttpClient) {
  }

  createSubmission(submission: Submission): Observable<object> {
    return this.http.post(this.route, submission, {
      headers: {}
    });
  }
}
