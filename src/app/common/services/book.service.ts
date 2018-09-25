import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Book } from "../models/book.model";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import { BaseApi } from "../core/base-api";

@Injectable() 
export class BookService extends BaseApi {
	constructor(public http: Http) {
		super(http);
		}

	getBooks(): Observable<Book[]> {
		return this.get('books');
	}

	addBook(book: Book): Observable<Book> {
    return this.post('books', book);
	}
	
	getBookById(id): Observable<Book> {
		return this.get(`books/${id}`);
	}
	
}