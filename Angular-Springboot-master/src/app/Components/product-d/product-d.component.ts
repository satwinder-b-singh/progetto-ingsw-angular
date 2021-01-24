import { Component, Input, OnInit,Output } from '@angular/core';
import {Product} from "../../Model/product";
import {ApiService} from "../../Service/api.service";
import {Router} from "@angular/router";
import {ActivatedRoute} from '@angular/router';
import { EventEmitter } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'product-d',
  templateUrl: './product-d.component.html',
  styleUrls: ['./product-d.component.css']
})
export class ProductDComponent implements OnInit {
  
  @Output() productAddToCart: EventEmitter<Product> = new EventEmitter<Product>();
  constructor(private api: ApiService,private _route : ActivatedRoute, private route:Router) { }
  product: Product = {
    productid: 0,
    description: '',
    productname: '',
    price: 0,
    quantity: 0,
    category: "",
    size: "",
    sex: "",
    productimage: null
  };
  id:number;
  auth_token: string;
  ngOnInit() {
    if(this.api.isAuthenticated)
        this.auth_token=this.api.getToken();

    this._route.queryParams.subscribe(params => {
      this.id = params["user"];
    });
    this.api.getProductsById(this.id).subscribe(
      data=>{
    this.product=data.product;
    console.log(this.product);
   },
      error=> console.log("Eccezione")
    )
   
  }
  addToCart(p: Product) {
    if (this.auth_token!=null && this.api.isAuthenticated)
    this.api.addCartItems(p, this.auth_token).subscribe(res => {
		console.log(p);
      console.log(res);
    });
    else
      this.route.navigate(["/login"]);
  }
}
