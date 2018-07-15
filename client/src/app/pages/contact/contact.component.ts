import {Component, NgZone, ViewChild} from '@angular/core';
import {CdkTextareaAutosize} from "@angular/cdk/text-field";
import {take} from "rxjs/internal/operators";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SubmissionService} from "@services/submission.service";
import {Submission} from "@models/submission.model";

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [SubmissionService]
})
export class ContactComponent {
  private form: FormGroup;
  private submission: Submission;

  constructor(private ngZone: NgZone, private formBuilder: FormBuilder, private submissionService: SubmissionService) {
    this.form = formBuilder.group({
      "email": [
        null, [
          Validators.required,
          Validators.email
        ]
      ],
      "message": [
        null, [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(1500),
        ]
      ]
    });
  }

  get email() {
    return this.form.get('email');
  }

  get message() {
    return this.form.get('message');
  }

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  triggerResize() {
    this.ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  onSubmit() {
    this.submission = <Submission>({
      email: this.form.value.email,
      body: this.form.value.message
    });

    return this.submissionService.createSubmission(this.submission).subscribe((res) => {
      console.warn(res);
    });
  }
}
