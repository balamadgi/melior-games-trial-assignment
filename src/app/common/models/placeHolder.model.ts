export class PlaceHolder {
	constructor(
		public id: number,
		public author: string,
		public title: string,
		public isbn: number,
		public pages: number,
		public countryId: number,
		public cityId: number,
		public companyId: number,
		public formatId: number,
		public description: string,
		public price: number,
		public countryName?: string,
		public cityName?: string,
		public companyName?: string
	) {}
}