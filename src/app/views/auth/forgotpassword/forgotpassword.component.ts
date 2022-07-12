import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./../auth.component.scss','./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  hr = new UserModel();
  constructor() { }

  ngOnInit(): void {
  }

}
