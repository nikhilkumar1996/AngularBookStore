import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  token:any=localStorage.getItem('token')
  constructor(private http:HttpService) { }

  addWishlist(data:any,prod_id:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Token': this.token
      })
    }
    return this.http.postService('bookstore_user/add_wish_list/'+prod_id,data,true,header)
  }
  getWishlist(){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Token': this.token
      })
    }
    return this.http.getService('bookstore_user/get_wishlist_items',true,header)
  }
  deleteWishlist(prod_id:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Token': this.token
      })
    }
    return this.http.deleteService('bookstore_user/remove_wishlist_item/'+prod_id,true,header)
  }
}
