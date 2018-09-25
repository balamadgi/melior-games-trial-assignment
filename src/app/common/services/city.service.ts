import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Book } from "../models/book.model";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import { BaseApi } from "../core/base-api";
import { Country } from "../models/country.model";
import { City } from "../models/city.model";

@Injectable() 
export class CityService extends BaseApi {
	constructor(public http: Http) {
		super(http);
		}

	getCities(): Observable<City[]> {
		return this.get('cities');
	}

	addCity(city: City): Observable<City> {
    return this.post('cities', city);
	}
	
}