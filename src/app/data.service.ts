import { forkJoin } from 'rxjs/observable/forkJoin';
import { Injectable, OnInit } from "@angular/core";
import { Book } from "./common/models/book.model";
import { Country } from "./common/models/country.model";
import { City } from "./common/models/city.model";
import { Company } from "./common/models/company.model";
import { BookService } from "./common/services/book.service";
import { CountryService } from "./common/services/country.service";
import { CityService } from "./common/services/city.service";
import { CompanyService } from "./common/services/company.service";
import { FormatService } from "./common/services/format.service";
import { Format } from './common/models/format.model';

@Injectable()
export class DataService {

	public books: Book[] = [];
	private countries: Country[] = [];
	private cities: City[] = [];
	private companies: Company[] = [];
	private formats: Format[] = [];
	isLoad = false;

	constructor(private bookService: BookService,
		private countryService: CountryService,
		private cityService: CityService,
		private companyService: CompanyService,
		private formatService: FormatService) { }


	public getBookById(id) {
		for (let i = 0; i < this.books.length; i++) {
			if (id === this.books[i].id) {
				return this.books[i];
			}
		}
	}
	public set(what, when: string) {
		switch (when) {
			case 'books':
				{
					this.books.slice(what);
				}
				break;
			case 'countries':
				{

					this.countries.push(what);
				}
				break;
			case 'cities':
				{

					this.cities.push(what);
				}
				break;
			case 'companies':
				{

					this.companies.push(what);
				}
				break;
			case 'formats':
				{

					this.formats.push(what);
				}
				break;
		}
	}
	public get(what: string) {
		switch (what) {
			case 'books':
				return this.books;

			case 'countries':
				return this.countries;

			case 'cities':
				return this.cities;

			case 'companies':
				return this.companies;

			case 'formats':
				return this.formats;
		}
	}

}