import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile.model';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  profile? : Profile;
  username ='';
  password = '';
  message = '';

  constructor(private loginService: LoginService, private router : Router ) { }

  ngOnInit(): void {
  }

 getUserProfile(): void{
  if(this.username == '' || this.password ==''){
    alert("enter login details");
    return;
  }
  
  this.loginService.get(this.username, this.password)
  .subscribe(data => {
    if(data == null){
      alert("login details are incorrect");
      return;
    }
    this.profile = data;
    this.router.navigate([`searchShow/${this.profile?.profileId}`]);
  });
 }
}
