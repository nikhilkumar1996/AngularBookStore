import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cartservice/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems:any;
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.displayCartItems()
  }

  displayCartItems(){
    console.log('Display Cart Items Api Calling')
    this.cart.display_cart().subscribe((res:any)=>{
      console.log(res)
      this.cartItems = res.result
      console.log(this.cartItems)
    })
  }
  incCartItems(quant:any,cart_id:any){
    console.log('Inc Cart Items Api Calling')
    let data={
      "quantityToBuy": quant+1
    }
    this.cart.update_cart(data,cart_id).subscribe((res:any)=>{
        console.log(res)
        this.displayCartItems()
    })
  }

  decCartItems(quant:any,cart_id:any){
    console.log('Dec Cart Items Api Callling')
    if (quant<1){
      return
    }
    let data = {
      "quantityToBuy": quant-1
    }
    this.cart.update_cart(data,cart_id).subscribe((res:any)=>{
      console.log(res)
      this.displayCartItems()
  })
  }
}
