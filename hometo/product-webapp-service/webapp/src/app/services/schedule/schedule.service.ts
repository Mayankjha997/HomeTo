import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from 'src/app/models/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private baseUrl = 'http://localhost:1002/api';

  constructor(private http: HttpClient) { }

  checkAvailability(startTime: number, endTime: number): Observable<boolean> {
    const url = `${this.baseUrl}/check`;
    const data = { flatId: 1234, startTime: startTime, endTime: endTime };

    return this.http.post<boolean>(url, data);
  }

  scheduleVisit(schedule: Schedule): Observable<any> {
    const url = `${this.baseUrl}/schedule-visit`;

    return this.http.post<string>(url, schedule);
  }
}
