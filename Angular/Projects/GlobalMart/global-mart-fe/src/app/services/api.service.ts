import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  server_url = "http://localhost:3000"
  constructor(private http:HttpClient) {}
  getAllProductsAPI(){
    return this.http.get(this.server_url+"/all-products");
  }

  getProductByIdAPI(id:any){
    return this.http.get(this.server_url+"/get-product/"+id);
  }

  registerUserAPI(data:any){
    return this.http.post(this.server_url+'/user-register',data);
  }
}
