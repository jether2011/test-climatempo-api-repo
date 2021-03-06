import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the StatesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StatesServiceProvider {
  states: any[];

  constructor(public http: HttpClient) {
    console.log('StatesServiceProvider');
  }

  loadStates() {
    this.states = [
      {
        "id": "1",
        "initial": "AC",
        "name": "Acre"
      },
      {
        "id": "2",
        "initial": "AL",
        "name": "Alagoas"
      },
      {
        "id": "3",
        "initial": "AM",
        "name": "Amazonas"
      },
      {
        "id": "4",
        "initial": "AP",
        "name": "Amapá"
      },
      {
        "id": "5",
        "initial": "BA",
        "name": "Bahia"
      },
      {
        "id": "6",
        "initial": "CE",
        "name": "Ceará"
      },
      {
        "id": "7",
        "initial": "DF",
        "name": "Distrito Federal"
      },
      {
        "id": "8",
        "initial": "ES",
        "name": "Espírito Santo"
      },
      {
        "id": "9",
        "initial": "GO",
        "name": "Goiás"
      },
      {
        "id": "10",
        "initial": "MA",
        "name": "Maranhão"
      },
      {
        "id": "11",
        "initial": "MG",
        "name": "Minas Gerais"
      },
      {
        "id": "12",
        "initial": "MS",
        "name": "Mato Grosso do Sul"
      },
      {
        "id": "13",
        "initial": "MT",
        "name": "Mato Grosso"
      },
      {
        "id": "14",
        "initial": "PA",
        "name": "Pará"
      },
      {
        "id": "15",
        "initial": "PB",
        "name": "Paraíba"
      },
      {
        "id": "16",
        "initial": "PE",
        "name": "Pernambuco"
      },
      {
        "id": "17",
        "initial": "PI",
        "name": "Piauí"
      },
      {
        "id": "18",
        "initial": "PR",
        "name": "Paraná"
      },
      {
        "id": "19",
        "initial": "RJ",
        "name": "Rio de Janeiro"
      },
      {
        "id": "20",
        "initial": "RN",
        "name": "Rio Grande do Norte"
      },
      {
        "id": "21",
        "initial": "RO",
        "name": "Rondônia"
      },
      {
        "id": "22",
        "initial": "RR",
        "name": "Roraima"
      },
      {
        "id": "23",
        "initial": "RS",
        "name": "Rio Grande do Sul"
      },
      {
        "id": "24",
        "initial": "SC",
        "name": "Santa Catarina"
      },
      {
        "id": "25",
        "initial": "SE",
        "name": "Sergipe"
      },
      {
        "id": "26",
        "initial": "SP",
        "name": "São Paulo"
      },
      {
        "id": "27",
        "initial": "TO",
        "name": "Tocantins"
      }
    ];

    return Promise.resolve(this.states);
  }
}
