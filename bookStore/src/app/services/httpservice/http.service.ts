import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  Baseurl = environment.baseurl

  constructor(private http:HttpClient) { }

  postService(url:string,data:any,token:boolean=false,httpOptions:any){
    return this.http.post(this.Baseurl+url,data,token && httpOptions);
  }

  getService(url:string,token:boolean=false,httpOptions:any){
    return this.http.get(this.Baseurl+url,token && httpOptions)
  }
  putService(url:string,data:any,token:boolean=false,httpOptions:any){
    return this.http.put(this.Baseurl+url,data,token && httpOptions)
  }
  deleteService(url:string,token:boolean=false,httpOptions:any){
    return this.http.delete(this.Baseurl+url,token && httpOptions)
  }
}
