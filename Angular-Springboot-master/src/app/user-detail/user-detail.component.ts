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
    id: 0,
    email: '',
    username: '',
    password: '',
    usertype: '',
    age: ''
  };
  auth: string;
  constructor(private route: ActivatedRoute, private api: ApiService,) { }

  ngOnInit() {
    console.log(this.auth);
    if (this.api.isAuthenticated) {
      this.auth = this.api.getToken();
      console.log(this.auth);
      this.api.getUserbyId(this.auth).subscribe(

        res => {
          this.user = res.user;
          console.log("DBDEUIFEN");
          console.log(this.user );

        }
        );

      }

  }

}
