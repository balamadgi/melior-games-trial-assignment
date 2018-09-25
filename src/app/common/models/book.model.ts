export class Book {
	constructor(
		public author: string,
		public title: string,
		public isbn: number,
		public pages: number,
		public description: string,
		public price: number,
		public countryId?: number,
		public cityId?: number,
		public companyId?: number,
		public formatId?: number,
		public id?: number,
		public countryName?: string,
		public cityName?: string,
		public companyName?: string,
		public formatName?: string
	) {}
}

// "id": 1,
//     "author": "Miguel De Cervantes",
//     "title": "Don Quixote",
//     "isbn": "0060934344",
//     "pages": 992,
//     "countryId": 1,
//     "cityId": 5,
//     "companyId": 1,
//     "formatId": 1,
//     "description": "This is a great book!",
//     "price": 129.32