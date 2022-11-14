import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)])
  });

  constructor(private route:Router) { }

  ngOnInit() {
  }
  get email(){
    return this.form.get('email')
  }
  get password(){
    return this.form.get('password')
  }
  submitFunction(){
    this.route.navigate(['/home']);
  }

}