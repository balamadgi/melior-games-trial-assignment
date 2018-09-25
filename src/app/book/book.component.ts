import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute, Params } from '@angular/router';
import { BookService } from '../common/services/book.service';
import { mergeMap, map } from 'rxjs/operators';
import { Book } from '../common/models/book.model';
import { DataService } from '../data.service';
import { Format } from '../common/models/format.model';
import { FormatService } from '../common/services/format.service';
import { Country } from '../common/models/country.model';
import { CountryService } from '../common/services/country.service';
import { CityService } from '../common/services/city.service';
import { City } from '../common/models/city.model';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { Company } from '../common/models/company.model';
import { CompanyService } from '../common/services/company.service';

@Component({
	selector: 'app-book',
	templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {

	book: Book;
	formats: Format[];
	countries: Country[];
	cities: City[];
	companies: Company[];
	form: FormGroup;
	publisherForm: FormGroup;


	constructor(
		private bookService: BookService,
		private formatService: FormatService,
		private countryService: CountryService,
		private cityService: CityService,
		private companyService: CompanyService,
		private dataService: DataService) { }

	ngOnInit() {
		forkJoin(
		this.formatService.getFormat(),
		this.countryService.getCountries(),
		this.cityService.getCities(),
		this.companyService.getCompanies()
		)		
		.subscribe((data) => 
		{
			this.formats = data[0];
			this.countries = data[1];			
			this.cities = data[2];
			this.companies = data[3];
		})
		
		this.form = new FormGroup({
			'author': new FormControl('', [Validators.required]),
			'title': new FormControl('', [Validators.required]),
			'isbn': new FormControl('', [Validators.required]),
			'numOfPages': new FormControl('', [Validators.required, Validators.min(0)]),
			'format': new FormControl('Paperback', [Validators.required]),
			'description': new FormControl('', [Validators.required]),
			'price': new FormControl('0', [Validators.required, Validators.min(0)]),
	
			'country': new FormControl('United States of America', [Validators.required]),
			'city': new FormControl('Washington', [Validators.required]),
			'company': new FormControl('UPDAT', [Validators.required])
		});
	}

	onSubmit() {
		const { author, title, isbn, numOfPages, description, price, country, city, company, format} = this.form.value;
	
		this.book = new Book(
			author, 
			title, 
			isbn, 
			numOfPages, 
			description, 
			price,
			this.countries.find(c => c.name === country).id,
			this.cities.find(c => c.name === city).id,
			this.companies.find(c => c.name === company).id);

	this.bookService.addBook(this.book).subscribe();

	this.dataService.set(this.book, 'books');

	console.log(this.dataService.books);

		
}


}
