import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Country } from "../interfaces/country.interfaces";

@Injectable({
    providedIn: "root"
})

export class CountryService {
    private apiUrl: string = 'https://restcountries.com/v2'

    get httpParams() {
        return new HttpParams().set('fields', 'name,capital,population,area,region,subregion,currencies,languages,flag,alpha2Code')
    }

    constructor(private http: HttpClient) { }

    //devuelve un observable de tipo Country
    searchCountry(countryName: string): Observable<Country[]> {
        const url = `${this.apiUrl}/name/${countryName}`
        return this.http.get<Country[]>(url, { params: this.httpParams })
    }

    searchCapital(countryName: string): Observable<Country[]> {
        const url = `${this.apiUrl}/capital/${countryName}`
        return this.http.get<Country[]>(url, { params: this.httpParams })
    }

    getCountryById(countryId: string): Observable<Country> {
        const url = `${this.apiUrl}/alpha/${countryId}`
        return this.http.get<Country>(url)
    }
    searchRegion(region: string): Observable<Country[]> {

        const url = `${this.apiUrl}/regionalbloc/${region}`;
        return this.http.get<Country[]>(url, { params: this.httpParams })
    }

}
