import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {
  termino: string = ''
  hasError: boolean = false
  countries: Country[] = []

  constructor(private countryService: CountryService) { }

  search(termino: string) {
    this.termino = termino
    this.hasError = false

    //hay que subscribirnos para que se ejecute el metodo
    this.countryService.searchCapital(this.termino)
      .subscribe({
        next: (resp) => {
          this.countries = resp
        },
        error: (error: any) => {
          this.hasError = true
          this.countries = []
        },
      })
  }

  sugestion(termino: string) {
    this.hasError = false
  }


}
