import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeriveService {
  API_URL = 'http://localhost:8000/';

  constructor(private http:HttpClient) { }


  addUserData(data: any): Observable<any> {
    return this.http.post<any>(`http://localhost:8000/contact/addContactQuery`, data)
  }
}
