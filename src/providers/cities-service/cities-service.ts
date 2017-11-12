import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the CitiesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CitiesServiceProvider {
  headers = {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };
  urlCities: string = "http://apiadvisor.climatempo.com.br/api/v1/locale/city";
  urlCity: string = "http://apiadvisor.climatempo.com.br/api/v1/weather/locale/";
  public data: any;

  constructor(public http: HttpClient) {
    console.log("CitiesServiceProvider");
  }

  loadCities() {
    let body = JSON.stringify(this.data);
    let headersRequest = new Headers(this.headers);
    let options = new RequestOptions({ headers: headersRequest });

    if (this.data) {
      return Promise.resolve(this.data);
    }
  
    return new Promise(resolve => {
      this.http.get(this.urlCities + "?state=SP&token=334ea9d9b10399afc14c74bd63134a2e")
        .do((response : Response ) => console.log(response.json()))
        .map((response : Response ) => response.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
        //.catch(error => console.log(error))
    });
  }

  getCity (idCity: number) {
    return this.http.get(this.urlCity + `${idCity}` + "/current?token=334ea9d9b10399afc14c74bd63134a2e")
      .map((response : Response ) => {
        return response.json();
      });
  }
}
