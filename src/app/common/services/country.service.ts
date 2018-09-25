import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Book } from "../models/book.model";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import { BaseApi } from "../core/base-api";
import { Country } from "../models/country.model";

@Injectable()
export class CountryService extends BaseApi {
	constructor(public http: Http) {
		super(http);
	}

	getCountries(): Observable<Country[]> {
		return this.get('countries');
	}

	getCountryById(id: number): Observable<Country[]> {
		return this.get(`countries/${id}`)
	}

	addCountry(country: Country): Observable<Country> {
		return this.post('countries', country);
	}

}