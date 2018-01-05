import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { WeatherProvider } from "../../providers/weather/weather";
import { Storage } from "@ionic/storage";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  weather:any;
  city:any;
  location:{
    city:string,
    state:string
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private weatherProvider:WeatherProvider,
              private storage:Storage)
  {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ionViewWillEnter(){
    this.storage.get('location').then((val) => {
      if(val != null){
        this.location = JSON.parse(val);
        console.log(this.location);

      } else {
        this.location = {
          city: 'Semarang',
          state: 'ID'
        }
      }

      this.weatherProvider.getWeather(this.location.city, this.location.state)
        .then(weather => {
          this.weather = weather;
          console.log(this.weather);
        });

      this.weatherProvider.getCity()
        .then(city => {
          this.city = city;
          console.log(this.city);
        });
    });


  }

}
