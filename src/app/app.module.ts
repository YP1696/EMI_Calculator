import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanSliderComponent } from './loan-slider/loan-slider.component';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { PieChartModule } from './pie-chart/pie-chart.module';


@NgModule({
  declarations: [
    AppComponent,
    LoanSliderComponent,
    LoanCalculatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    NgxSliderModule,
    BrowserAnimationsModule,
    MatButtonModule,
    PieChartModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
