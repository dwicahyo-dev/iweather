import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherProvider {

  apiKey: string = 'eca0c3cce20cd52d';
  url: string;

  weather:any;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');

    this.url = `http://api.wunderground.com/api/${this.apiKey}/conditions/q/`;
  }

  getWeather(city, state) {
    return new Promise(resolve => {
      this.http.get(`${this.url}/${state}/${city}.json`).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


}
