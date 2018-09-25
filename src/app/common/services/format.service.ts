import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Book } from "../models/book.model";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import { BaseApi } from "../core/base-api";import { Country } from "../models/country.model";
import { Format } from "../models/format.model";

@Injectable() 
export class FormatService extends BaseApi {
	constructor(public http: Http) {
		super(http);
		}

	getFormat(): Observable<Format[]> {
		return this.get('formats');
	}

	getFormatById(id: number): Observable<Format[]> {
		return this.get(`formats/${id}`)
	}

	
	addFormat(format: Format): Observable<Format> {
    return this.post('format', format);
	}
	
}