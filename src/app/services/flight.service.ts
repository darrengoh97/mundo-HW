import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Flight} from '../models/Flight';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  geturl = 'https://everymundointernship.herokuapp.com/popularRoutes/KF81FB31FI85';
  posturl = 'https://everymundointernship.herokuapp.com/search/KF81FB31FI85';

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    tripType: new FormControl('1'),
    origin: new FormControl('', Validators.required),
    destination: new FormControl('', Validators.required),
    departureDate: new FormControl('', Validators.required),
    returnDate: new FormControl(''),
    passengers: new FormControl(0),
    promoCode: new FormControl(''),
  });

  initializeFormGroup() {
    this.form.setValue({
      tripType: '1',
      origin: '',
      destination: '',
      departureDate: '',
      returnDate: '',
      passengers: '0',
      promoCode: ''
    });
  }

  postForm(flight) {
    this.http.post(this.posturl, flight, httpOptions);
  }

  getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.geturl);
  }

  populateForm(flight) {
    // this.form.setValue(flight);
    this.form.setValue({
      tripType: flight.tripType === 'roundTrip' ? '1' : '2',
      origin: flight.origin,
      destination: flight.destination,
      departureDate: new Date(flight.departureDate),
      returnDate: new Date(flight.returnDate),
      passengers: '0',
      promoCode: ''
    });
  }
}
