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
  showTableBorder: boolean = true;
  flagColorOfUSA: string = 'blue';

  colors: Object = {
    color: 'red',
    fontWeight: 'bold',
  };

  countryInfo: Object = {
    'text-bold': true,
    'text-italic': true,
    'text-underlined': true,
    'text-green': true,
  };

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
