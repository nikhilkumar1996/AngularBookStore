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

  constructor() { }

  changeMessage(message: object) {
    this.messageSource.next(message)
  }
  changeSearch(search: string){
    this.searchSource.next(search)
  }
}
