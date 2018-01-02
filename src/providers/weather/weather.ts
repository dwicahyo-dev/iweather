import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherProvider {

  apiKey: string = 'eca0c3cce20cd52d';
  url: string;


  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');

    this.url = `http://api.wunderground.com/api/${this.apiKey}/conditions/q/CA/San_Francisco.json`;
  }

  getWeather(city, state){
     return this.http.get( )
  }

}
