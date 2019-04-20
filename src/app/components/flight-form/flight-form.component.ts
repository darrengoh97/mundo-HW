import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.css']
})
export class FlightFormComponent implements OnInit {
  todaydate = new Date();

  constructor(public dialogRef: MatDialogRef<FlightFormComponent>,
              private service: FlightService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.service.postForm(this.service.form.value);
    this.dialogRef.close();
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

  getTodayDate() {
    return this.todaydate;
  }
}
