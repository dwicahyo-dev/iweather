import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { WeatherProvider } from "../../providers/weather/weather";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  weather:any;
  location:{
    city:string,
    state:string
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private weatherProvider:WeatherProvider) {
    this.getWeather();
  }

  getWeather() {
      this.location= {
        city: 'Jakarta',
        state: 'ID'
      };

      this.weatherProvider.getWeather(this.location.city, this.location.state)
        .then(data => {
          this.weather = data.current_observation;
          console.log(this.weather.display_location.full);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
