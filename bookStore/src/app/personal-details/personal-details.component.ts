import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/dataservice/data.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  pflag:boolean=false;
  aflag:boolean=false;
  user_details:any;

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe((message:any)=>{
      this.user_details=message;
      console.log('aaa')
      console.log(this.user_details);
    })
  }
  pedit(){
    this.pflag=true;
  }
  pcancel(){
    this.pflag=false;
  }
  aedit(){
    this.aflag=true;
  }
  acancel(){
    this.aflag=false;
  }
  // createUser
}
