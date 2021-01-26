import { Component, EventEmitter, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
import { Product } from 'src/app/Model/product';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import { Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Input } from '@angular/core';

@Component({
  selector: 'app-filtri',
  templateUrl: './filtri.component.html',
  styleUrls: ['./filtri.component.css']
})
export class FiltriComponent implements OnInit {
  @Input() public sex;
  @Output() inviaF: EventEmitter<Product[]> = new EventEmitter<Product[]>();
  products: Product[] = [];
 private ele: any;
 constructor(private api: ApiService, private router: Router,private _route : ActivatedRoute,private http: HttpClient) { }
  category: string;
  size:string;
  ngOnInit() {
    this.size='';
  this.category='';
  }
  myClick() {
    console.log(this.size + this.category+this.sex);
    this.api.getProductsFiltri(this.size, this.category,this.sex).subscribe(
      res => {

        this.products = res.oblist;
        this.inviaFiltri();
      }
      );
    }
  azzera() {
     this.ele = document.getElementsByName('category');
    for (let i = 0; i < this.ele .length; i++) {
      this.ele[i].checked = false;
    }
    this.ele = document.getElementsByName('size');
    for (let i = 0; i < this.ele.length; i++) {
      this.ele[i].checked = false;
    }
    this.ele = document.getElementsByName('sesso');
    for (let i = 0; i < this.ele.length; i++) {
      this.ele[i].checked = false;
    }
  }
  
 inviaFiltri()
 {
   console.log("LISTA PRODOTTI POST FILTRI");
   console.log(this.products);
  this.inviaF.emit(this.products);
 }
}
