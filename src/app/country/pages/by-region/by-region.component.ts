import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `button {
      margin-right: 10px;
    }`
  ]
})
export class ByRegionComponent implements OnInit {

  regions: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC']
  activeRegion: string = ''
  countries: Country[] = []

  getClass(region: string) {
    return region === this.activeRegion ? 'btn btn-primary' : 'btn btn-outline-primarybtn btn-outline-primary'
  }

  getActiveRegion(region: string) {
    if (region === this.activeRegion) { return }

    this.activeRegion = region
    this.countries = []
    this.countryService.searchRegion(region)
      .subscribe({
        next: (resp) => {
          console.log(resp)
          this.countries = resp
        }
      })
  }
  constructor(public countryService: CountryService) { }

  ngOnInit(): void {
  }

}
