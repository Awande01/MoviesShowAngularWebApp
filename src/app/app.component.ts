import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentRoute? : any;
  title = 'MoviesShowAngularWebApp';

  constructor( private router : Router, private route : ActivatedRoute){}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event.constructor.name == "NavigationEnd") {
        this.currentRoute = (<any>event).url.split("/").slice(-1)[0];
      }
    })
    
  }


}
