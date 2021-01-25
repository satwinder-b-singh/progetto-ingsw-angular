import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/Model/user';
import { ApiService } from 'src/app/Service/api.service';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
@Component({
  selector: 'listautenti',
  templateUrl: './listautenti.component.html',
  styleUrls: ['./listautenti.component.css']
})
export class ListautentiComponent implements OnInit {
  users: User[] = [];
  constructor(private api: ApiService, private router: Router,private _route : ActivatedRoute) { }
  
  ngOnInit() {
    console.log("CISJOIDJ");
    this.api.getListaUtenti().subscribe(
      res => {
        console.log("CIAO")
        this.users = res.registredUser;
        console.log(this.users);
      }
    );//}
  }

}
