import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss']
})
export class DisplayBookComponent implements OnInit {
  book_details:any;
  @Input() childMessage: any;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  book_path(data:any){
    this.book_details=data
    console.log(this.book_details)
    this.route.navigateByUrl('dashboard/book/'+data)
  }
}
