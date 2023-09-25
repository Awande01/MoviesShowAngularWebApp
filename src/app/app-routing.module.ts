import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchShowComponent } from './search-show/search-show.component';
import { LoginComponent } from './login/login.component';
import { UserShowListComponent } from './user-show-list/user-show-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path : 'searchShow/:id', component : SearchShowComponent},
  { path : 'login', component: LoginComponent},
  { path : 'userShows/:id' , component: UserShowListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
