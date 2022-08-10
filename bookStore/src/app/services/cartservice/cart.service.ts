import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  token:any=localStorage.getItem('token')

  constructor(private http:HttpService) { }

  add_cart(data:any,prod_id:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Token': this.token
      })
    }
    return this.http.postService('bookstore_user/add_cart_item/'+ prod_id, data, true, header)
  }

  display_cart(){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Token': this.token
      })

    }
    return this.http.getService('bookstore_user/get_cart_items',true,header)
  }

  update_cart(data:any,cart_id:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Token': this.token
      })
    }
    return this.http.putService('bookstore_user/cart_item_quantity/'+cart_id,data,true,header)
  }

  delete_cart(cart_id:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Token': this.token
      })
    }
    return this.http.deleteService('bookstore_user/remove_cart_item/'+cart_id,true,header)
  }
}
