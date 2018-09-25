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
					this.books.push(what);
				}
				break;
			}
		}
}