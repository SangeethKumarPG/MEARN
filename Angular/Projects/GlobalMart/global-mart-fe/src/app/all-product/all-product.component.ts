import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import Swal from 'sweetalert2';
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
    // console.log(product);
    if(sessionStorage.getItem('token')){

      //logic to add item to wishlist
      this.productService.addToWishListAPI(product).subscribe({
        next:(res:any)=>{
          console.log("Add to wishlist response", res);
          this.productService.getWishListCountAPI()
          Swal.fire({
            title: 'Added to wishlist',
            text: 'Product added to wishlist successfully',
            icon:'success',
          })
         
        },
        error:(err:any)=>{
          console.log("Add to wishlist error", err);
          Swal.fire({
            icon: 'error',
            title:'Oops...',
            text: `${err.error}`
          })
        }
      })
      
    }else{
      Swal.fire({
        icon: 'error',
        title:'Oops...',
        text: 'Please login to add product to wishlist'
      })
    }

  }

  addToCart(product:any){
    console.log(product);
  }
}
