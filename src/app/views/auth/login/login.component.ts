import { Component, OnInit } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { UserModel } from 'src/app/models/UserModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./../auth.component.scss','./login.component.scss']
})
export class LoginComponent implements OnInit {

  hr = new UserModel();
  passwordType = 'password';
  faEyeSlash = faEyeSlash;

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    
  }
  
  showPassword(){
    this.faEyeSlash = this.passwordType == 'password'? faEye:faEyeSlash;
    this.passwordType = this.passwordType == 'password'? 'text' : 'password';
    
  }
}
 