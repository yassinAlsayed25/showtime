import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from "@angular/forms";
import { log } from 'console';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _service:MovieApiServiceService) { }

  ngOnInit(): void {
  }
searchResult:any;
searchForm = new FormGroup({
  'movieName':new FormControl(null)
});
submitForm()
{
  console.log(this.searchForm.value,'searchform#');
  this._service.getSearchMovie(this.searchForm.value).subscribe((result)=>{
    console.log(result);
    this.searchResult = result.results;
  });
}

}
