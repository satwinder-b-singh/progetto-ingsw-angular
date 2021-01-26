import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from "../../Service/api.service";

@Component({
  selector: 'profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent implements OnInit {

  constructor(private api: ApiService,private _route : ActivatedRoute) { }
  
  email: string;
  username: string;
  age: string;

  ngOnInit() {
  }

}
