import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cartservice/cart.service';
import { CustomerService } from '../services/customer/customer.service';
import { OrderService } from '../services/orderservice/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: any;
  placeorderflag: any = false;
  continueflag: any = false;
  address:string='';
  state:string='';
  city:string='';


  constructor(private cart: CartService, private order: OrderService,private customer:CustomerService) { }

  ngOnInit(): void {
    this.displayCartItems()
  }

  displayCartItems() {
    console.log('Display Cart Items Api Calling')
    this.cart.display_cart().subscribe((res: any) => {
      console.log(res)
      this.cartItems = res.result
      console.log(this.cartItems)
    })
  }
  incCartItems(quant: any, cart_id: any) {
    console.log('Inc Cart Items Api Calling')
    let data = {
      "quantityToBuy": quant + 1
    }
    this.cart.update_cart(data, cart_id).subscribe((res: any) => {
      console.log(res)
    })
  }

  decCartItems(quant: any, cart_id: any) {
    console.log('Dec Cart Items Api Calling')
    if (quant < 1) {
      return
    }
    let data = {
      "quantityToBuy": quant - 1
    }
    this.cart.update_cart(data, cart_id).subscribe((res: any) => {
      console.log(res)
    })
  }
  delCartItems(id: any) {
    console.log('Delete Cart Item Api Calling')
    this.cart.delete_cart(id).subscribe((res: any) => {
      console.log(res)
      this.displayCartItems()
    })
  }
  confirmOrder() {
    let orders = []
    for (let cartItm of this.cartItems) {
      let ord = {
        'product_id': cartItm._id,
        'product_name': cartItm.product_id.bookName,
        'product_quantity': cartItm.product_id.quantityToBuy,
        'product_price': cartItm.product_id.price,
      }
      orders.push(ord)
    }
    console.log('ORDER LIST', orders)

    let data = {
      orders
    }
    console.log('Order Api Calling')
    this.order.createOrder(data).subscribe((res: any) => {
      console.log(res)
    })
  }
  placeOrder() {
    this.placeorderflag = true

  }
  continue() {
    this.continueflag = true
    this.editCustomerDetails()
  }

  editCustomerDetails(){
    let data={
      'addressType':'Home',
      'fullAddress':this.address,
      'city':this.city,
      'state':this.state,
    }
    console.log('Edit User Details Api Calling..')
    this.customer.updateCustomerDetails(data).subscribe((res:any)=>{
      console.log(res)
    })
  }
  

}
