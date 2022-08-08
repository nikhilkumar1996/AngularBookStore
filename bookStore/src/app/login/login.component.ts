import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/userservice/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  flag:any=true
  bcolor:string="#757373"
  loginForm !: FormGroup;
  submitted = false;
  token:any;


  constructor(private user:UserService, private fb:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  login(){
    this.flag=true;
    this.bcolor="#757373";

  }
  register(){
    this.flag=false;
    this.bcolor="#afacac";
  }

  get f(){ return this.loginForm.controls;}
  onSubmit(){
    this.submitted=true;

    if (this.loginForm.invalid){
      return;
    }
    
    let data={
      'email': this.loginForm.value.email,
      'password': this.loginForm.value.password
    }
    console.log("Login Api Call")
    this.user.login(data).subscribe((res:any)=>{
      console.log(res)
      this.token=res.result.accessToken
      localStorage.setItem('token',this.token)
      this.route.navigateByUrl('/dashboard/books')
    })
  }



}
