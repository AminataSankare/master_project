import { WeatherClient } from './../clients/weather.client';
import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import sampleData from '../data.json';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  // public weather: Observable<any> = this.weatherClient.getWeatherData();
  Users: any = sampleData;

  constructor(
    private authenticationService: AuthenticationService,
    // private weatherClient: WeatherClient
  ) {}

  ngOnInit(): void {}

  logout(): void {
    this.authenticationService.logout();
  }
}
