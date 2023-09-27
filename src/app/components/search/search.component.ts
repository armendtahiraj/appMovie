import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

   movieTitle: string = "wheel of Time";

  constructor(){}
  ngOnInit(): void {

  }

}
