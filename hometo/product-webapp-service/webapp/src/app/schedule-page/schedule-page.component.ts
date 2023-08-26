import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Schedule } from '../models/schedule';
import { ScheduleService } from '../services/schedule/schedule.service';

@Component({
  selector: 'app-schedule-page',
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.css']
})
export class SchedulePageComponent {
  scheduleForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private scheduleService: ScheduleService,
    private snackBar: MatSnackBar
  ) {
    this.scheduleForm = this.formBuilder.group({
      startTime: ['', Validators.required],
      endTime: ['', Validators.required]
    });
  }

  checkAvailability() {
    const formValues = this.scheduleForm.value;
    const startTime = this.scheduleForm.value.startTime
    const endTime = this.scheduleForm.value.endTime

    if (startTime !== undefined && endTime !== undefined) {
      this.scheduleService.checkAvailability(startTime, endTime)
        .subscribe((available:boolean) => {
          if (available) {
            this.openSnackBar('Slot is available to book.');
          } else {
            this.openSnackBar('Slot is not available.');
          }
        });
    } else {
      this.openSnackBar('Please select valid start and end times.');
    }
  }

  scheduleVisit() {
    const formValues = this.scheduleForm.value;
    const startTime = this.scheduleForm.value.startTime
    const endTime = this.scheduleForm.value.endTime

    const scheduleData: Schedule = { userId: '5678', flatId: '1234', startTime: startTime, endTime: endTime };

    this.scheduleService.scheduleVisit(scheduleData)
      .subscribe(response => {
        this.openSnackBar('Visit scheduled successfully.');
      }, error => {
        this.openSnackBar(error.message)
        // this.openSnackBar('Error scheduling visit.');
        console.error('Error scheduling visit:', error);
      });
  }


  private openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000
    });
  }

}
