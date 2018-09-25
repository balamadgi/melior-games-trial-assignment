import { forkJoin } from 'rxjs/observable/forkJoin';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookService } from '../common/services/book.service';
import { Book } from '../common/models/book.model';
import { CountryService } from '../common/services/country.service';
import { Subscription } from 'rxjs/Subscription';
import { Country } from '../common/models/country.model';
import { City } from '../common/models/city.model';
import { CityService } from '../common/services/city.service';
import { Company } from '../common/models/company.model';
import { CompanyService } from '../common/services/company.service';
import { DataService } from '../data.service';
import { Format } from '../common/models/format.model';
import { FormatService } from '../common/services/format.service';


@Component({
	selector: 'app-showcase',
	templateUrl: './showcase.component.html'
})

export class ShowcaseComponent implements OnInit {
	private books: Book[] = [];
	private countries: Country[] = [];
	private cities: City[] = [];
	private companies: Company[] = [];
	private formats: Format[] = [];

	isLoad = false;

	// sub1 = Subscription;

	constructor(private bookService: BookService,
		private countryService: CountryService,
		private cityService: CityService,
		private companyService: CompanyService,
		private formatService: FormatService,
		private dataService: DataService
	) { }

	ngOnInit() {
		forkJoin(
			this.bookService.getBooks(), this.countryService.getCountries(), this.cityService.getCities(), this.companyService.getCompanies(),
			this.formatService.getFormat()
		)
			.subscribe((data: [Book[], Country[], City[], Company[], Format[]]) => {
				this.books = data[0]; this.countries = data[1]; this.cities = data[2]; this.companies = data[3]; this.formats = data[4]; 4
				this.isLoad = true;

				this.books.forEach(book => {
					for (let a = 0; a <= this.countries.length - 1; a++) {
						if (book.countryId === this.countries[a].id)
							book.countryName = this.countries[a].name;
					}
				});
				this.books.forEach(book => {
					for (let b = 0; b <= this.cities.length - 1; b++) {
						if (book.cityId === this.cities[b].id)
							book.cityName = this.cities[b].name;
					}
				});
				this.books.forEach(book => {
					for (let c = 0; c <= this.companies.length - 1; c++) {
						if (book.companyId === this.companies[c].id)
							book.companyName = this.companies[c].name;
					}
				});
				this.books.forEach(book => {
					for (let d = 0; d <= this.formats.length - 1; d++) {

						if (book.formatId === this.formats[d].id)
							book.formatName = this.formats[d].name;
					}
				});
			
			this.dataService.set(this.books, 'books');
			this.dataService.set(this.countries, 'countries');
			this.dataService.set(this.cities, 'cities');
			this.dataService.set(this.companies, 'companies');
			this.dataService.set(this.formats, 'formats');	
			})
			
			console.log(this.dataService.books);
	}

}