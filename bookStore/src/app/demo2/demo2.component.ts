import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/dataservice/data.service';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {
   @Input() childMessage:any;
  output:any;
  flag:any=false;
  constructor(private data:DataService) { }
  ngOnInit(): void {
    
  }
  getOutput(){
    // this.output=this.data.getMessage()
    // console.log(this.output)
    
    // console.log(this.childMessage)
    this.flag=true
  }
}

