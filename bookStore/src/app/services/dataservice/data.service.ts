import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject({});
  currentMessage = this.messageSource.asObservable();

  private searchSource = new BehaviorSubject('');
  currentSearch = this.searchSource.asObservable();

  private countSource = new BehaviorSubject({});
  currentCount = this.countSource.asObservable();

  message:any;

  constructor() { }

  changeMessage(message:object) {
    this.messageSource.next(message)
  }
  changeSearch(search: string){
    this.searchSource.next(search)
  }
  changeCount(count:object){
    this.countSource.next(count)
  }

  setMessage(data:any){
    this.message=data
  }
  getMessage(){
    return this.message
  }
}
