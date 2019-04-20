import { Component, OnInit, Input, Output } from '@angular/core';
import { Flight } from 'src/app/models/Flight';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { FlightFormComponent } from '../flight-form/flight-form.component';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-flight-item',
  templateUrl: './flight-item.component.html',
  styleUrls: ['./flight-item.component.css']
})
export class FlightItemComponent implements OnInit {
  @Input() flight: Flight;

  constructor(private  dialog: MatDialog,
              private service: FlightService) { }

  ngOnInit() {
  }

  onView(flight) {
    this.service.populateForm(flight);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '55%';
    dialogConfig.height = '45%';
    this.dialog.open(FlightFormComponent, dialogConfig);
  }
}
