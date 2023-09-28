import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  movieId = ''

  constructor(private _activateRoute: ActivatedRoute){

    this._activateRoute.params.subscribe((p)=>{
      this.movieId = p['id'];

      console.log("Movie", + this.movieId)
    })

  }

}
