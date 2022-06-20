import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `li {
      cursor: pointer;
    }
    `
  ]
})
export class ByCountryComponent {
  termino: string = ''
  hasError: boolean = false
  countries: Country[] = []
  sugestedCountries: Country[] = []
  showSuggested: boolean = false

  constructor(private countryService: CountryService) { }

  search(termino: string) {
    this.termino = termino
    this.hasError = false
    this.showSuggested = false

    //hay que subscribirnos para que se ejecute el metodo
    this.countryService.searchCountry(this.termino)
      .subscribe({
        next: (resp) => {
          console.log(resp)
          this.countries = resp
        },
        error: (error: any) => {
          this.hasError = true
          this.countries = []
          console.log(error)
        },
      })
  }

  sugestion(termino: string) {
    this.hasError = false
    this.termino = termino
    this.showSuggested = true

    this.countryService.searchCountry(termino)
      .subscribe({
        next: country => this.sugestedCountries = country.splice(0, 5),
        error: (error: any) => this.sugestedCountries = []
      })
  }

  searchSugestion(termino: string) {
    this.search(termino)
  }
}
