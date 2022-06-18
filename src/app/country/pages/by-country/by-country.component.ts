import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {
  termino: string = ''
  hasError: boolean = false
  countries: Country[] = []

  constructor(private countryService: CountryService) { }

  search(termino: string) {
    this.termino = termino
    this.hasError = false

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


}
