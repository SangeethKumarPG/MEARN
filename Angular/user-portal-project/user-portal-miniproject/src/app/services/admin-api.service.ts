import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor(private httpClient: HttpClient) {}
  server_url = "http://localhost:3000"
  
  adminAuthorize(){
     return this.httpClient.get(`${this.server_url}/employee/1`);
  }

  updateAdmin(admin:any){
    return this.httpClient.put(`${this.server_url}/employee/1`, admin)
  }

  //creating a behavious subject to share data between components
  public sharedData = new BehaviorSubject(false);
  // create a function to upadte the shared data
  updateSharedData(data:any){
    this.sharedData.next(data);
  }
}
