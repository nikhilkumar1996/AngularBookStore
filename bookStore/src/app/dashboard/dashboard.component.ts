import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/dataservice/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user_details:any;
  message:any;
  search_text:string=''
  constructor(private data:DataService) { }

  ngOnInit(): void {
    // this.data.currentSearch.subscribe(message=>this.message=message)

  }
  onKeyUp(event:any){
    this.search_text = event.target.value
    this.data.changeSearch(this.search_text)
  }

}
