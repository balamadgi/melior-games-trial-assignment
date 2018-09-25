import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Book } from "../models/book.model";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import { BaseApi } from "../core/base-api";
import { Country } from "../models/country.model";
import { Company } from "../models/company.model";

@Injectable() 
export class CompanyService extends BaseApi {
	constructor(public http: Http) {
		super(http);
		}

	getCompanies(): Observable<Company[]> {
		return this.get('companies');
	}

	addCompany(company: Company): Observable<Company> {
    return this.post('companies', company);
	}

	
	
}