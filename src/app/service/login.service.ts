import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 readonly apiUrl = 'https://localhost:7283/api/Profile/';

  constructor(private http: HttpClient) { }

  get(username: any, password: any): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}?username=${username}&password=${password}`);
  }
}
