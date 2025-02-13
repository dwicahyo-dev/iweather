import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from "@ionic/storage";
import { WeatherProvider } from "../../providers/weather/weather";

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  city:string;
  state:string;
  getcity:any;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage:Storage,
              private weatherProvider:WeatherProvider) {

    this.storage.get('location').then((val) => {
      if(val != null) {
        let location = JSON.parse(val);
        this.city = location.city;
        this.state = location.state;
      } else {
        this.city = 'Pekalongan';
        this.state = 'ID';
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  ionViewWillEnter(){
    this.weatherProvider.getCity()
      .then(city => {
        this.getcity = city;
        console.log(this.getcity);
      });
  }

  saveForm(){
    let location = {
      city: this.city,
      state: this.state
    };
    this.storage.set('location', JSON.stringify(location));
    this.navCtrl.setRoot('HomePage');
  }

}
