import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  server_url = "http://localhost:3000"
  constructor(private http:HttpClient) {}
   //common function to create a custom header
  addTokenToHeader(){
    // create an object of class HttpHeaders
    let headers = new HttpHeaders();
    const token = sessionStorage.getItem('token');
    // console.log(token);
    if(token){
      headers = headers.append('Authorization',`Bearer ${token}`);
    }
    return {headers};
  }
  getAllProductsAPI(){
    return this.http.get(this.server_url+"/all-products");
  }

  getProductByIdAPI(id:any){
    return this.http.get(this.server_url+"/get-product/"+id);
  }

  registerUserAPI(data:any){
    return this.http.post(this.server_url+'/user-register',data);
  }

  loginUserAPI(data:any){
    return this.http.post(this.server_url+'/user-login',data);
  }

  addToWishListAPI(data:any){
    return this.http.post(this.server_url+'/add-to-wishlist', data, this.addTokenToHeader());
  }

  getAllWishListItemsAPI(){
    return this.http.get(this.server_url+'/all-wishlist-items', this.addTokenToHeader());
  }
  
  removeFromWishListAPI(id:any){
    return this.http.delete(this.server_url+'/remove-from-wishlist/'+id, this.addTokenToHeader());
  }

  wishListCount = new BehaviorSubject(0);
  
  getWishListCountAPI(){
    this.getAllWishListItemsAPI().subscribe({
      next:(data:any)=>{
        this.wishListCount.next(data.length);
      }
    })
  }

  addToCartAPI(data:any){
    return this.http.post(this.server_url+'/add-product-to-cart', data, this.addTokenToHeader());
  }

  getAllCartItemsAPI(){
    return this.http.get(this.server_url+'/all-cart-items', this.addTokenToHeader());
  }

  //creating a behaviour subject to store the cart items count
  cartCount = new BehaviorSubject(0);

  getCartCountAPI(){
    this.getAllCartItemsAPI().subscribe((res:any)=>{
      // console.log(res.length);
      this.cartCount.next(res.length)
    })
  }

  incrementCartQuantityAPI(id:any){
    return this.http.get(this.server_url+'/increment-cart-quantity/'+id, this.addTokenToHeader());
  }

  decrementCartQuantityAPI(id:any){
    return this.http.get(this.server_url+'/decrement-cart-quantity/'+id, this.addTokenToHeader())
  }

  emptyCartAPI(){
    return this.http.delete(this.server_url+'/empty-cart', this.addTokenToHeader());
  }

  deleteCartItemAPI(id:any){
    return this.http.delete(this.server_url+'/remove-cart-item/'+id, this.addTokenToHeader());
  }

}
