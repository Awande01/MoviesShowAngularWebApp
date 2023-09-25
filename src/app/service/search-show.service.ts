import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResponse } from '../models/search-response.model';

@Injectable({
  providedIn: 'root'
})
export class SearchShowService {
  readonly apiUrl = 'https://localhost:7283/api/FindShow/';

  constructor(private http: HttpClient) { }

  get(searchKeyword: any): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}${searchKeyword}`);
  }
}
