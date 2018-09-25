import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Book } from '../common/models/book.model';
import { DataService } from '../data.service';
import { BookService } from '../common/services/book.service';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-book-detail',
	templateUrl: './book-detail.component.html',
	styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
	bookId: number = 0;
	book: any = [];
	isLoad = false;

	constructor(private route: ActivatedRoute,
		private dataService: DataService) { }

	ngOnInit() {
		
		this.route.params.pipe()
			.subscribe((params: Params) => {
				this.bookId = +params['id'];
			});

		this.book = this.dataService.getBookById(this.bookId)
		console.log(this.book);
		this.isLoad = true;
	}
}


