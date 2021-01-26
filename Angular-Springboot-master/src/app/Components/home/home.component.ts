import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
import { Product } from 'src/app/Model/product';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {User} from "../../Model/user";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  products: Product[] = [];
  private auth_token: string;

  constructor(private api: ApiService, private router: Router,private _route : ActivatedRoute) { }
  category: string="";
  sesso: string= "";
  size: string= "";

  ngOnInit() {
    //this.api.getUserbyId(this.auth_token)
    if (this.api.isAuthenticated){
      this.auth_token = this.api.getToken();

    }
    this.api.getProductsVisitor().subscribe(
      res => {

        this.products = res.oblist;
        console.log(this.products);
      }
    );//}

  }


  showProductPage(product) {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        "user": product

      }
    };

    this.router.navigate(['/visitor/detailProduct'], navigationExtras  );

    }
  myClick(){
    console.log(this.size + this.sesso + this.category)
    this.api.getProductsFiltri(this.size,this.category,this.sesso).subscribe(
      res => {

        this.products = res.oblist;

      }
    );
  }

  }
