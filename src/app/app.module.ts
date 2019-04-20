import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MatInputModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';
import { FlightItemComponent } from './components/flight-item/flight-item.component';
import { FlightFormComponent } from './components/flight-form/flight-form.component';
import { FlightService } from './services/flight.service';

@NgModule({
  exports: [
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatRadioModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatGridListModule,
    MatInputModule
  ]
})
export class MaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    FlightDetailsComponent,
    FlightItemComponent,
    FlightFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatNativeDateModule
  ],
  entryComponents: [FlightFormComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
