import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  userName = new FormControl('');
  password = new FormControl('');
  
  constructor(private  authService:  AuthService) { }

  ngOnInit(): void {
    this.authService.checkLogin();
  }

  signIn(){
    this.authService.login(this.userName.value, this.password.value);
  }

}
