import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlistservice/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  lists:any;
  constructor(private wishlist:WishlistService) { }

  ngOnInit(): void {
    this.getallwishlist()
  }

  getallwishlist(){
    console.log('Get Wishlist Api calling..')
    this.wishlist.getWishlist().subscribe((res:any)=>{
      console.log(res)
      this.lists=res.result
    })
  }
  deleteWishlist(prod_id:any){
    console.log('Delete Wishlist Api calling..')
    this.wishlist.deleteWishlist(prod_id).subscribe((res:any)=>{
      console.log(res)
      this.getallwishlist()
    })
  }
}
