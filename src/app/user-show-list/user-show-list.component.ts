import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShowService } from '../service/show.service';
import { ShowList } from '../models/show-list.model';
import { SearchResponse } from '../models/search-response.model';
import { SearchShowService } from '../service/search-show.service';
@Component({
  selector: 'app-user-show-list',
  templateUrl: './user-show-list.component.html',
  styleUrls: ['./user-show-list.component.css']
})
export class UserShowListComponent implements OnInit {
showList? :ShowList[];
ModalTitle = "";
ActivateViewComp: boolean = false;
isWatched: boolean = false;

responseList?: SearchResponse[];
  constructor(private router : Router, private showService : ShowService,private route : ActivatedRoute,private searchShowService: SearchShowService) { }

  ngOnInit(): void {
    this.getShows();
  }

  getShows(): void{
    this.showService.getByProfile(this.route.snapshot.params["id"])
    .subscribe(data => {
      if(data == null){
        alert("error loading data");
        return;
      }
      this.showList = data;

    });
   }

   deleteShow(showId: any): void{
    this.showService.delete(showId)
    .subscribe(data => {
      if(data == null){
        alert("error deleting show");
        return;
      }
      this.getShows();
      alert("show  deleted successfully");
    });
   }

   updateShows(showId: any,isWatched: any): void{
    this.showService.update(isWatched, showId)
    .subscribe(data => {
      if(data == null || data == false){
        alert("error updating show");
        return;
      }
      this.getShows();
      alert("show  updated successfully");
    });
   }
   searchPage(): void{
    this.router.navigate([`/searchShow/${this.route.snapshot.params["id"]}`]);
 
  }
  logout(): void{


    this.router.navigate([`login`]);
    
  }
  view(searchKeyword: any) {
  if(searchKeyword == null || searchKeyword == '' || searchKeyword == undefined)
  {
    this.ModalTitle = "No episode found";
    return;
  }
    this.ModalTitle = "Next Episode";
    this.ActivateViewComp = true;

    this.searchShowService.get(searchKeyword)
    .subscribe(data => {
      if(data == null){
        alert("error loading data");
        return;
      }
      this.responseList = data;
    });
  }
  closeClick() {
    this.ActivateViewComp = false;

  }
  checkValue(event: any,showId: any){
    this.isWatched = event =='A'? true : false;
    this.updateShows(showId,this.isWatched);
 }
}
