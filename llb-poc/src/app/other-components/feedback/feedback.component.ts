import { Component, OnInit } from '@angular/core';
import { FeedbackData } from 'app/other-components/feedback/feedback-data';
import { isNullOrEmpty } from '../../../utils';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackData: FeedbackData;
  infoValid: boolean;

  constructor() {
  }

  ngOnInit() {
    this.feedbackData = new FeedbackData;
    this.infoValid = true;
  }

  sendFeedback(): void {
    console.log(this.feedbackData);
    if(isNullOrEmpty(this.feedbackData) || isNullOrEmpty(this.feedbackData.Email) || isNullOrEmpty(this.feedbackData.Subject) || isNullOrEmpty(this.feedbackData.Feedback)) {
      // data is invalid
      this.infoValid = false;
    } else {
      //data is valid and can be sent forward
      this.infoValid = true;
    }
  }
}
