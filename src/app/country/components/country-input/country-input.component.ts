import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit {


  //creo un evento que se emite cuando se escribe en el input
  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>()
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>()
  @Input() placeholder: string = ''

  termino: string = ''
  debouncer: Subject<string> = new Subject<string>() //emite el termino cada vez que se escribe, es observable

  ngOnInit(): void {
    //utilizamos esta forma porque el debouncer es un observable y nos podemos subscribir y nos permite emitir solo un valor cada X tiempo
    this.debouncer
      .pipe(  //pipe es un operador que nos permite hacer operaciones con el observable antes de emitir el valor
        debounceTime(500) //espera 500ms para emitir el valor
      )
      .subscribe(termino => {
        //emite el termino
        this.onDebounce.emit(termino)
      })
  }

  search() {
    this.onEnter.emit(this.termino)
  }

  keyPress() {
    //elanza el evento,next se usa para enviar el valor
    this.debouncer.next(this.termino)
  }

}
