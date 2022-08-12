import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/dataservice/data.service';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss']
})
export class DisplayBookComponent implements OnInit {
  @Input() childMessage: any;
  p: number = 1;
  count: number = 8;
  sorting:string='';
  price_low:string='price_low';
  price_high:string='price_high';
  filterstring:string='';
  constructor(private route:Router, private data:DataService) { }

  ngOnInit(): void {
    this.data.currentSearch.subscribe((search:any)=>{
      console.log('SEARCH',search)
      this.filterstring = search
    })
  }

  book_path(data:any){
    this.route.navigateByUrl('dashboard/book/'+data)
  }
  sort_by(entity:string){
    this.sorting=entity;
  }
}
