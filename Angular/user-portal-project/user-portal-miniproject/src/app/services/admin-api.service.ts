import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor(private httpClient: HttpClient) {}
  server_url = "http://localhost:3000"
  
  adminAuthorize(){
     return this.httpClient.get(`${this.server_url}/employee/1`);
  }

}
