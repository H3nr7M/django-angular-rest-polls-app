import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollsService {
  private apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {}

  getPolls(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getPollDetail(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}${id}/`);
  }
}
