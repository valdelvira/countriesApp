import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Country } from "../interfaces/country.interfaces";

@Injectable({
    providedIn: "root"
})

export class CountryService {
    private apiUrl: string = 'https://restcountries.com/v2'

    constructor(private http: HttpClient) { }

    //devuelve un observable de tipo Country
    searchCountry(countryName: string): Observable<Country[]> {
        const url = `${this.apiUrl}/name/${countryName}`;
        return this.http.get<Country[]>(url);
    }
}
