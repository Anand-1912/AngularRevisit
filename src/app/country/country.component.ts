import { Component } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent {
  sectionId: string = 'countriesDivision';
  headerTitle: string = 'List of Countries';
  hideCountriesList: boolean = false;

  countriesList = [
    {
      country: 'India',
      continent: 'Asia',
    },
    {
      country: 'USA',
      continent: 'North America',
    },
    {
      country: 'UK',
      continent: 'Europe',
    },
  ];
}
