import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CitiesServiceProvider} from '../../providers/cities-service/cities-service';
import {StatesServiceProvider} from '../../providers/states-service/states-service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [CitiesServiceProvider, StatesServiceProvider]
})

export class ListPage {
  selectedState: any;
  icons: string[];
  public cities: any;
  public states: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public citiesService: CitiesServiceProvider, public statesService: StatesServiceProvider) {
    
    this.selectedState = navParams.get('state');
    this.statesService.loadStates().then(state => {
      this.states = state;
    });
  }

  cityTapped(event, city) {
    this.navCtrl.push('DetailsPage', {
      city: city
    });
  }

  public selectObjectByStateInitial(state: any) {
    console.log(state);
    
    this.icons = ['wifi'];
    this.citiesService.loadCities(state).then(data => {
      this.cities = data;
      console.log(this.cities);
      return this.cities;
    });
  }
}
