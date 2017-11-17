import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CitiesServiceProvider} from '../../providers/cities-service/cities-service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [CitiesServiceProvider]
})

export class ListPage {
  selectedCity: any;
  icons: string[];
  public cities: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public citiesService: CitiesServiceProvider) {

    this.selectedCity = navParams.get('city');

    this.icons = ['wifi'];
    this.citiesService.loadCities().then(data => {
      this.cities = data;
    });
  }

  cityTapped(event, city) {
    this.navCtrl.push(ListPage, {
      city: city
    });
  }
}
