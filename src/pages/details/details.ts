import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CitiesServiceProvider} from '../../providers/cities-service/cities-service';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
  providers: [CitiesServiceProvider]
})

export class DetailsPage {
  city: any;
  weather: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public citiesService: CitiesServiceProvider) {

    this.city = navParams.get('city');
    //console.log(this.city);

    this.showDetails(this.city);
  }

  showDetails(item: any){
    this.citiesService.getCity(item.id).then( data => {
      this.weather = data;
      //console.log(this.weather);      
    })
    .catch(() => {});
  }
}
