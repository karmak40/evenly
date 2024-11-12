import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserPublic } from '../features/login/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://api.example.com/users'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  fetchUsers(): Observable<UserPublic[]> {
    return this.http.get<UserPublic[]>(this.apiUrl);
  }

  //In addition to the response body or response object,
  // HttpClient can also return a stream of raw events corresponding to specific moments in the request lifecycle. These events include when the request is sent,
  fetchUsers2(): Observable<HttpEvent<any>> {
    return this.http.get<UserPublic[]>(this.apiUrl, {
      reportProgress: true,
      observe: 'events'
    });
  }


  createUser(user: any): Observable<unknown> {
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.post<any>(this.apiUrl, user, {headers});
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${userId}`);
  }

  

}
