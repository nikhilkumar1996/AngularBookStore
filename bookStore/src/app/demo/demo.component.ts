import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/dataservice/data.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  a:any=[
    {
      'fruits':'Banana',
      'veggi': 'Patato'
    },
    {
      'fruits':'Kiwi',
      'veggi':'Cabbage'
    }
  ]
  a1:any
  
  constructor(private data:DataService) { }

  ngOnInit(): void {
  //  this.data.setMessage(this.a)
  this.a1=['Banana','Kiwi','Cabbage','Tamato']
  console.log(this.a1)
  }
    
}
