import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent {

  termino: string = ''

  //creo un evento que se emite cuando se escribe en el input
  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  search() {
    this.onEnter.emit(this.termino)
  }

}
