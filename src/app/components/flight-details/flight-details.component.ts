import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { Flight } from '../../models/Flight';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  flightDetails: Flight[];

  constructor(private service: FlightService) { }

  ngOnInit() {
    this.service.getFlights().subscribe(flightDetails => {
      this.flightDetails = flightDetails;
    });
  }
}
