import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private _http:HttpClient) { }

  baseurl = "http://api.themoviedb.org/3";
  apikey = "08cc33bd5ae3a747598ce2ad84376e66";


  bannerApiData():Observable<any>
  {
    return this._http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);

  }

trendingMovieApiData():Observable<any>
{
  return this._http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
}


getSearchMovie(data:any):Observable<any>
{
  console.log(data);

  return this._http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
}

getMovieDetails(data:any):Observable<any>
{
  return this._http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`);
}

getMovieVideo(data:any):Observable<any>
{
  return this._http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`);
}

getMovieCats(data:any):Observable<any>
{
  return this._http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
}

fetchActionMovies():Observable<any>
{
  return this._http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`)
}
fetchAdventureMovies():Observable<any>
{
  return this._http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`)
}
fetchAnimationMovies():Observable<any>
{
  return this._http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`)
}
fetchComedyMovies():Observable<any>
{
  return this._http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`)
}

}
