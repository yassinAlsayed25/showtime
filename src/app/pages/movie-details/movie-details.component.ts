import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private _service:MovieApiServiceService , private _router:ActivatedRoute) { }
  getMovieDetaiResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;

  ngOnInit(): void {
    let getparamId = this._router.snapshot.paramMap.get('id');
    console.log(getparamId);


    this.getMovie(getparamId);
    this.getVideo(getparamId);
    this.getMovieCast(getparamId);
  }
  getMovie(id:any){
    this._service.getMovieDetails(id).subscribe((result)=>
    {
      console.log(result);
      this.getMovieDetaiResult = result;

    });
  }


  getVideo(id:any)
  {
    this._service.getMovieVideo(id).subscribe((result)=>{
      console.log(result,'video');
      result.results.forEach((element:any) => {
        if(element.type=='Trailer')
        {
          this.getMovieVideoResult = element.key;
        }

      });

    });
  }
  getMovieCast(id:any)
  {
    this._service.getMovieCats(id).subscribe((result)=>{
      console.log(result,'cast');
      this.getMovieCastResult = result.cast;
    })
  }

}
