import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _service:MovieApiServiceService) { }
  bannerResult:any=[];
  trendingMovieResult:any=[];
  actionMovieResult:any=[];
  adventureMovieResult:any=[];
  animationMovieResult:any=[];
  comedyMovieResult:any=[];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.animationMovie();
    this.comedyMovie();

  }

  bannerData()
  {
    this._service.bannerApiData().subscribe((result)=>{
      console.log(result);
      this.bannerResult = result.results;
    });
  }


  trendingData()
  {
    this._service.trendingMovieApiData().subscribe((result)=>{
      console.log(result);
      this.trendingMovieResult = result.results;

    });
  }
  actionMovie()
  {
    this._service.fetchActionMovies().subscribe((result)=>{
        this.actionMovieResult = result.results;
    });
  }
  adventureMovie()
  {
    this._service.fetchAdventureMovies().subscribe((result)=>{
        this.adventureMovieResult = result.results;
    });
  }
  animationMovie()
  {
    this._service.fetchAnimationMovies().subscribe((result)=>{
      this.animationMovieResult = result.results;
    });
  }
  comedyMovie()
  {
    this._service.fetchComedyMovies().subscribe((result)=>{
      this.comedyMovieResult = result.results;
    });
  }






}
