import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  allWishListItems:any = []
  ngOnInit(): void {
    this.getAllWishListItems();
  }

  constructor(private apiService : ApiService) { }

  getAllWishListItems(){
    this.apiService.getAllWishListItemsAPI().subscribe({
      next:(data:any)=>{
        this.allWishListItems = data;
        console.log("All wishlist items : ", this.allWishListItems);
      },
      error:(error:any)=>{
        console.log("Error in getting all wishlist items : ", error);
      }
    })
  }

  deleteWishListItem(productId:any){
    this.apiService.removeFromWishListAPI(productId).subscribe({
      next:(data:any)=>{
        this.getAllWishListItems();
        this.apiService.getWishListCountAPI();
        // Swal.fire({
        //   title: 'Success',
        //   text: 'Product removed from wishlist',
        //   icon:'success',
        //   confirmButtonText: 'OK'
        // })
      },
      error:(error:any)=>{
        Swal.fire({
          title: 'Error',
          text: 'Error in removing product from wishlist',
          icon: 'error'
        })
      }
    })
  }

}
