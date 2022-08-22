import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/dataservice/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cart_details:any;
  message:any;
  search_text:string=''
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.currentSearch.subscribe(message=>this.message=message)
    this.data.currentCount.subscribe(count=>this.cart_details=count)
    console.log(this.cart_details)
  }
  onKeyUp(event:any){
    this.search_text = event.target.value
    this.data.changeSearch(this.search_text)
  }

}
