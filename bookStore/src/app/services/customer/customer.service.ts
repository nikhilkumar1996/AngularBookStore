import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  token: any = localStorage.getItem('token')
  constructor(private http: HttpService) { }

  updateCustomerDetails(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Token': this.token
      })
    }
    return this.http.putService('bookstore_user/edit_user/', data, true, header)
  }
  addFeedback(data: any, prod_id: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Token': this.token
      })
    }
    return this.http.postService('bookstore_user/add/feedback/'+ prod_id, data, true, header)
  }
  getFeedback(prod_id:any){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Token': this.token
      })
    }
    return this.http.getService('bookstore_user/get/feedback/'+prod_id,true,header)
  }
}

