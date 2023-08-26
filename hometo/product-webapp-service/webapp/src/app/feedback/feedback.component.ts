import { Component } from '@angular/core';
import { AbstractControl, FormBuilder,FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from '../services/feedback/feedback.service';
import { Feedback } from '../models/Feedback';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

function ratingRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const rating = control.value;
  if (rating !== null && (isNaN(rating) || rating < 1 || rating > 5)) {
    return { 'ratingRange': true };
  }
  return null;
}


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  feedbackForm: FormGroup;
  
  constructor(private snackBar: MatSnackBar,private router: Router, private formBuilder: FormBuilder, private feedbackService: FeedbackService) {
    this.feedbackForm = this.formBuilder.group({
      name: ['', Validators.required],
      custemail: ['', [Validators.required, Validators.email]],
      // phone: ['',Validators.required],
      rating: ['',[Validators.required, ratingRangeValidator]],
      comments: ['',Validators.required]
    });
  }

  onSubmit() {
    if (this.feedbackForm.valid) {
      const feedbackData: Feedback = this.feedbackForm.value;

      this.feedbackService.addfeedback(feedbackData).subscribe(
        (response:any) => {
          console.log('Feedback sent successfully:', response);
          this.openSnackBar('Feedback sent successfully.');
          // Optionally, you can reset the form after successful submission
          this.feedbackForm.reset();
        },
        (error:any) => {
          console.error('Error sending feedback:', error);
          this.openSnackBar('Error sending feedback. Try Again.');
        }
      );
    }
  }

  openFeedbacks(): void {
    this.router.navigate(['customer-feedbacks']);
  }

private openSnackBar(msg:string) {
  this.snackBar.open(msg, 'Close',{
    duration: 3000
  });
}

}

