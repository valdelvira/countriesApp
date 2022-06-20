import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styles: [
  ]
})
export class ShowCountryComponent implements OnInit {

  country!: Country //ponemos ! para que  no nos diga que puede ser nulo 

  constructor(private activatedRoute: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {
    //se ejecuta cuando se carga el componente antes del constructor

    //  //obtenemos el parametro que se le pasa por la url
    this.activatedRoute.params
      //trabajamos con el valor devuelto por el observable
      .pipe(
        //switchMap es un operador que nos permite trabajar con el observable antes de emitir el valor 
        // y lo que hace es que cambia el observable
        switchMap(({ id }) => this.countryService.getCountryById(id)),
        tap(console.log) //tap permite ejecutar una funcion antes de emitir el valor
      )
      .subscribe(country => this.country = country)


    // this.activatedRoute.params
    //   .subscribe(({ id }) => { // desestructuramos el parametro
    //     this.countryService.getCountryById(id)
    //       .subscribe(country => {
    //         console.log(country)
    //       })
    //   })

  }

}
