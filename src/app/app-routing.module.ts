import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

const routes: Routes = [
  { path: 'showcase', component: ShowcaseComponent },
  { path: 'book/new', component: BookComponent },
  { path: 'book/:id', component: BookDetailComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', redirectTo: '/showcase', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  { }
