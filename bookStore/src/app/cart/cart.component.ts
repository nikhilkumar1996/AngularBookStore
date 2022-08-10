import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cartservice/cart.service';
import { OrderService } from '../services/orderservice/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems:any;
  placeorderflag:any=false;
  continueflag:any=false;
  cartNo:any;
  constructor(private cart:CartService,private order:OrderService ) { }

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
    })
  }

  decCartItems(quant:any,cart_id:any){
    console.log('Dec Cart Items Api Calling')
    if (quant<1){
      return
    }
    let data = {
      "quantityToBuy": quant-1
    }
    this.cart.update_cart(data,cart_id).subscribe((res:any)=>{
      console.log(res)
  })
  }
  delCartItems(id:any){
    console.log('Delete Cart Item Api Calling')
    this.cart.delete_cart(id).subscribe((res:any)=>{
      console.log(res)
    })
  }
  confirmOrder(prod_id:any,prod_name:any,prod_quant:any,prod_price:any){
    let data={
      orders:[{

        'product_id':prod_id,
        'product_name':prod_name,
        'product_quantity':prod_quant,
        'product_price':prod_price,
      }
      ]
    }
    console.log('Order Api Calling')
    this.order.createOrder(data).subscribe((res:any)=>{
      console.log(res)
    })
  }
  placeOrder(cart:any){
    this.placeorderflag=true
    this.cartNo=cart

  }
  continue(){
    this.continueflag=true
  }
  
}
