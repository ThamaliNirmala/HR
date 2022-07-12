import { Component, OnInit } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { UserModel } from 'src/app/models/UserModel';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./../auth.component.scss','./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  hr = new UserModel();
  password: any;
  confirmPassword = '';
  faEyeSlash = faEyeSlash;
  confaEyeSlash = faEyeSlash
  passwordType = 'password';
  confirmPasswordType = 'password';

  constructor() { }

  ngOnInit(): void {
  }

  showPassword(){
    this.faEyeSlash = this.passwordType == 'password'? faEye:faEyeSlash;
    this.passwordType = this.passwordType == 'password'? 'text' : 'password';
    
  }

  showConfirmPassword(){
    this.confaEyeSlash = this.confirmPasswordType == 'password'? faEye:faEyeSlash;
    this.confirmPasswordType = this.confirmPasswordType == 'password'? 'text' : 'password';
  }

}
