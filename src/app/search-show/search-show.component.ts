import { Component, OnInit } from '@angular/core';
import { SearchShowService } from '../service/search-show.service';
import { SearchResponse } from '../models/search-response.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ShowService } from '../service/show.service';
@Component({
  selector: 'app-search-show',
  templateUrl: './search-show.component.html',
  styleUrls: ['./search-show.component.css']
})
export class SearchShowComponent implements OnInit {
  searchKeyword ='';
  responseList?: SearchResponse[];
 
  
  constructor(private searchShowService: SearchShowService, private router : Router, private showService : ShowService,private route : ActivatedRoute ) { }

  ngOnInit(): void {
  
  }

  search(): void{

    if(this.searchKeyword == ''){
      alert("Enter show title");
      return;
    }
    
    this.searchShowService.get(this.searchKeyword)
    .subscribe(data => {
      if(data == null){
        alert("error loading data");
        return;
      }
      this.responseList = data;
    });
   }
    
   save(show: SearchResponse): void{   

    show.profileId = this.route.snapshot.params["id"];
    this.showService.create(show)
    .subscribe(data => {
      if(data == null){
        alert("error saving show");
        return;
      }
      alert(data);
      this.router.navigate([`userShows/${this.route.snapshot.params["id"]}`]);
    });
   }

   logout(): void{


    this.router.navigate([`login`]);
    
  }
  showListPage(): void{


    this.router.navigate([`userShows/${this.route.snapshot.params["id"]}`]);
    
  }
}
