import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  allCartItems :any = [];
  totalPrice:any = 0;
  constructor(private productService : ApiService) { }
  ngOnInit(): void {
    this.getAllCartItems();
    
  }

  getAllCartItems(){
    this.productService.getAllCartItemsAPI().subscribe({
      next:(data)=>{
        console.log(data)
        this.allCartItems = data;
        this.getTotalPrice();
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

  incrementQuantity(productId:any){
    console.log("Inside incrementQuantity", productId);
    this.productService.incrementCartQuantityAPI(productId).subscribe({
      next:(data)=>{
        // console.log(data)
        this.getAllCartItems();
      },
      error:(error)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:`${error.error}`
        })
      }
    })
  }

  decrementQuantity(productId:any){
    this.productService.decrementCartQuantityAPI(productId).subscribe({
      next:(data)=>{
        // console.log(data)
        this.getAllCartItems();
      }, 
      error:(error)=>{
        Swal.fire({
          title: 'Oops...',
          icon: 'error',
          text: `${error.error}`
        })
      }
    })
  }

  emptyCart(){
    this.productService.emptyCartAPI().subscribe({
      next:(data)=>{
        Swal.fire({
          title: 'Success',
          text: 'Your cart is now empty',
          icon:'success'
        })
        this.getAllCartItems();
      },
      error:(error)=>{
        Swal.fire({
          title: 'Oops...',
          icon: 'error',
          text: `${error.error}`
        })
      }
    })
  }

  deleteCartItem(productId:any){
    this.productService.deleteCartItemAPI(productId).subscribe({
      next:(data)=>{
        this.getAllCartItems();
        this.productService.getCartCountAPI();
      },
      error:(error)=>{
        Swal.fire({
          title: 'Oops...',
          icon: 'error',
          text: `${error.error}`
        })
      }
    })
  }

  getTotalPrice(){
    this.totalPrice = 0;
    this.allCartItems.map((item:any)=>{
      this.totalPrice += item.grandTotal;
    })
  }

  checkout(){
    sessionStorage.setItem('totalCartValue', JSON.stringify(this.totalPrice));
  }
}
