import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productData:any;
  constructor(private router:ActivatedRoute, private productService:ApiService) { }
  ngOnInit():void {
    this.router.params.subscribe((res:any)=>{
      const id = res.id;
      console.log("Product Id : ",id);
      this.getProductById(id);
    })
  }
  getProductById(id:any){
    this.productService.getProductByIdAPI(id).subscribe({
      next:(res:any)=>{
        console.log("Product Details : ",res);
        this.productData = res;
      },
      error:(err:any)=>{
        console.log("Error : ",err);
      }
    })
  }

  addToWishList(){}
  addToCart(){}
}
