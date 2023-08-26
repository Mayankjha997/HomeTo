import { Component, OnInit } from '@angular/core';
import { Feedback } from '../models/Feedback';
import { FeedbackService } from '../services/feedback/feedback.service';

@Component({
  selector: 'app-all-feedbacks-page',
  templateUrl: './all-feedbacks-page.component.html',
  styleUrls: ['./all-feedbacks-page.component.css']
})
export class AllFeedbacksPageComponent implements OnInit{

  feedbackList: Feedback[] = [];
  range1: number[] = [];
  range2: number[] = [];

  constructor(private feedbackService: FeedbackService){}

  ngOnInit(): void {
    this.feedbackService.getFeedback().subscribe(
      (data:any) => {
        this.feedbackList=data;
      },
      (error:any) => {
        console.error('Error fetching feedbacks:', error);
      }

    );
  }

  createRange1(rating:any): any{
    this.range1=Array.from({ length: rating }, (_, i) => i + 1);
    return this.range1;
  }

  createRange2(rating:any): any{
    this.range2=Array.from({ length: 5-rating }, (_, i) => i + 1);
    return this.range2;
  }
}
