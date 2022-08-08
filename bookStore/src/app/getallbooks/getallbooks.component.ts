import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/bookservice/book.service';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss']
})
export class GetallbooksComponent implements OnInit {

  bookArray:any;
  constructor(private book:BookService) { }

  ngOnInit(): void {
    this.get_all_book()
  }

  get_all_book(){
    console.log('Get All Api calling')
    this.book.getAllBooks().subscribe((res:any)=>{
      console.log(res)
      this.bookArray=res.result
    })
  }
}
