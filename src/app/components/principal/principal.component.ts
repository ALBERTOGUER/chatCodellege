import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {


  public Mensajes: Array<any> = [];
  constructor(private auth: AuthService, private af: AngularFirestore) {

    this.auth.userProfile$.subscribe(data => {

      let usuario = {
        user:data.name,
        picture: data.picture,
        email: data.email
      }

      localStorage.setItem('user', JSON.stringify(usuario))
    })

    this.af.collection('chat', ref => ref.orderBy('fecha', 'asc')).valueChanges().subscribe(chats => this.Mensajes =chats)
  }

  ngOnInit() {
  }

   sendmessage(mensaje){


    if(mensaje == '')return

    let user = JSON.parse(localStorage.getItem('user'));

    let item ={
      mensaje,
      usuario: user.user,
      picture: user.picture,
      fecha:  Date.now()
    }

    this.af.collection('chat').add(item);
  }

}
