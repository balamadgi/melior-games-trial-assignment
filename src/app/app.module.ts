import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BookComponent } from './book/book.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { SearchComponent } from './search/search.component';
import { BookService } from './common/services/book.service';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { CountryService } from './common/services/country.service';
import { CityService } from './common/services/city.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyService } from './common/services/company.service';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { DataService } from './data.service';
import { FormatService } from './common/services/format.service';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    NavigationComponent,
    ShowcaseComponent,
    SearchComponent,
    BookDetailComponent
  ],
  imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		HttpModule,
    BrowserModule,
    RouterModule
  ],
  providers: [BookService, CountryService, CityService, CompanyService, FormatService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
