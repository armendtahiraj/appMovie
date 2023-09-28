import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { SearchComponent } from './components/search/search.component';
import { MovieDetailsActorsComponent } from './components/movie-details-actors/movie-details-actors.component';
import { DetailsMoviesComponent } from './components/details-movies/details-movies.component';
import { DetailsReviewsComponent } from './components/details-reviews/details-reviews.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'movie-details/:id', component: DetailsComponent},
  {path: 'search/:movieTitle', component: SearchComponent},
  {path: 'details/actors/:id', component: MovieDetailsActorsComponent},
  {path: 'details/movies/:id', component: DetailsMoviesComponent},
  {path: 'details/reviews/:id', component: DetailsReviewsComponent},
  {path: '**', component: NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
