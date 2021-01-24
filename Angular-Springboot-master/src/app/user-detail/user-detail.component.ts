import { Component, OnInit } from '@angular/core';
import {User} from "../Model/user";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../Service/api.service";
import {Address} from "../Model/address";

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User = {
    email: '',
    username: '',
    password: '',
    usertype: '',
    age: ''
  };
  address: Address = {
    nome: "",
    cognome: "",
    nazione: "",
    indirizzo: "",
    città: "",
    regione: "",
    CAP: "",
    email: "",
    phone: ""

  };
  auth: string;
  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    if (this.api.isAuthenticated) {
      this.auth = this.api.getToken();
      this.api.getUserbyId(this.auth).subscribe(

        res => {
          this.user = res.user;
          console.log(this.user );

        }
        );
      this.api.getAddress(this.auth).subscribe(res => {
        if (res.map != null) {
          this.address = res.map;
        }
      }, err => {
        console.log(err);
      });

      }

  }

}
