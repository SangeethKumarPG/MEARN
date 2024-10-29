import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  products : any = [];
  ngOnInit(): void {
    console.log("All Product Component");
    this.productService.getAllProductsAPI().subscribe({
      next: (data) => {
        console.log(data);
        this.products = data;
      },
      error: (error) => {
        console.log(error);
      }
    }
     
    )
  }
  constructor(private productService: ApiService) { }

  addToWishList(product:any){
    console.log(product);
  }

  addToCart(product:any){
    console.log(product);
  }
}
