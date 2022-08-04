import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/userservice/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm !: FormGroup;
  submitted = false;

  constructor(private fb:FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      'fullname': ['', Validators.required],
      'email': ['', Validators.required],
      'Password': ['', [Validators.required, Validators.minLength(8)]],
      'phoneNo': ['', [Validators.required,Validators.maxLength(10)]],
      'service':['advance']
    })
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls;}

  onSubmit(){
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    console.log('Register Api Calling...')
    let data={
      fullName:this.registerForm.value.fullname,
      email:this.registerForm.value.email,
      password:this.registerForm.value.Password,
      phone:this.registerForm.value.phoneNo,
      service: this.registerForm.value.service
  
    }
    this.user.register(data).subscribe((res:any)=>{
      console.log(res);
    })  
    
  }
}



