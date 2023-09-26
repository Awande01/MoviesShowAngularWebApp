import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  readonly apiUrl = 'https://localhost:7283/api/Show';

  constructor(private http: HttpClient) { }

  getByProfile(profileId: any): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/${profileId}/List`);
  }

  getByImdbId (imdbId: string): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/${imdbId}`);
  }

  getById (id: number): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/${id}`);
  }

  create(data: any): Observable<any>{
    return this.http.post(this.apiUrl, data);
  }

  update(isWatched: any, id: any): Observable<any>{
    return this.http.put(`${this.apiUrl}?showId=${id}&isWatched=${isWatched}`,'');
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
