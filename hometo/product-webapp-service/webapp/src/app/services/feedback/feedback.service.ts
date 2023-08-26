import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from 'src/app/models/Feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http : HttpClient) { }

  //  addfeedback(note:Feedback):any{
  //   return this.http.post<Feedback>('http://localhost:9001/feedback/save/feedback',note)
  //  }


  addfeedback(note:Feedback):any
  {
    return this.http.post<Feedback>('http://localhost:1004/feedback/save/feedback',note)
  }

   getFeedback(): Observable<any> {
    return this.http.get('http://localhost:1004/feedback/get/feedback');
  }
}
