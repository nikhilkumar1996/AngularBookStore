import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/bookservice/book.service';
import { CartService } from '../services/cartservice/cart.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  
  book:any;
  bookArray:any;
  book_details:any;
  flag:any=true;
  cartItems:any;
  cartItem:any;
  cartId:any;

  
  
  constructor(private route:ActivatedRoute,private books:BookService,private cart:CartService) { }
  
  ngOnInit(): void {
    this.get_book_details()
    console.log(this.book_details)
    this.book = this.route.snapshot.params['data']
    this.getCartItems()
    
  }

  reloadCurrentPage() {
    window.location.reload();
   } 
  
  get_book_details(){
    console.log('book details Api calling')

    this.books.getAllBooks().subscribe((res:any)=>{
      this.bookArray=res.result
      this.book_details=this.bookArray.filter((obj:any)=>{
        return obj._id === this.book
      })
    })
  }

  addToCart(id:any){
    this.flag=false
    console.log('Add to Cart Api Calling')
    let data={}
    this.cart.add_cart(data,id).subscribe((res:any)=>{  
      console.log(res)
    })
  }
  getCartItems(){
    console.log('Display Cart Items Api Calling')
    this.cart.display_cart().subscribe((res:any)=>{
      console.log(res)
      this.cartItems = res.result
      this.cartItem =  this.cartItems.filter((obj:any)=>{
        return obj.product_id._id === this.book
      })
      console.log(this.cartItem)
    })
  }
  
  incCartItems(quant:any,cart_id:any){
    console.log('Inc Cart Items Api Calling')
    let data={
      "quantityToBuy": quant+1
    }
    this.cart.update_cart(data,cart_id).subscribe((res:any)=>{
        console.log(res)
        this.getCartItems()
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
      this.getCartItems()
  })
  }
}
