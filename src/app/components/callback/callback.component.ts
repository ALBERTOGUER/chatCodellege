import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styles: []
})
export class CallbackComponent implements OnInit {

  constructor(private auth:AuthService) {
    this.auth.handleRedirectCallback$.subscribe();
   }

  ngOnInit() {
  }

}
