import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  isSigned = false;

  constructor(private  authService: AuthService) {}

  ngOnInit(): void {
    this.authService.onSignInObservable.subscribe(response => {
      console.log({message: 'legin', response})
      this.isSigned = response;
    });
  }
}
