import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherProvider {

  apiKey: string = '871862cfa7f34da49f5c38d365ed66d9';
  url: string;

  constructor(public http: HttpClient) {
    this.url = `http://api.openweathermap.org/data/2.5/weather?q=`;
  }

  getWeather(city, state) {
    return new Promise(resolve => {
      this.http.get(`${this.url}${city},${state}&units=metric&appid=${this.apiKey}`)
        .subscribe(data => {
          resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getCity(){
    return new Promise(resolve => {
      this.http.get(`../assets/data/city.list.json`)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }
}
