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
  items: Array<{id: string, name: string, state: string, country: string}>;
  public cities: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public citiesService: CitiesServiceProvider) {

    this.selectedCity = navParams.get('city');

    // Let's populate this page with some filler content for funzies
    // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    // 'american-football', 'boat', 'bluetooth', 'build'];
    this.icons = ['wifi'];
    this.citiesService.loadCities().then(data => {
      this.cities = data;
    });

    //this.items = [];
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }

  cityTapped(event, city) {
    this.navCtrl.push(ListPage, {
      city: city
    });
  }
}
