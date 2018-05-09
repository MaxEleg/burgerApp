import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  appUrl: String = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  fetchMeals() {
    return this.http.get(this.appUrl + '/meals');
  }
}
