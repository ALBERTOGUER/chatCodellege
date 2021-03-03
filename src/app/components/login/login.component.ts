import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService) { 
    this.auth.logout();
    this.auth.login();
  }

  ngOnInit() {
    
  }

}
