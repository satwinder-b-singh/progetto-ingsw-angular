import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
import { Product } from 'src/app/Model/product';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  private auth_token: string;
<<<<<<< Updated upstream
  constructor(private api: ApiService, private router: Router,private _route : ActivatedRoute) { }
  categoria: string="";
  sesso: string= "";
  size: string= "";
=======
  constructor(private api: ApiService, private router: Router, private _route: ActivatedRoute) { }
  category = '';
  sesso = '';
  size = '';
>>>>>>> Stashed changes
  ngOnInit() {

      this.api.getProductsVisitor().subscribe(
      res => {

        this.products = res.oblist;
        console.log(this.products);
      }
    ); //}

  }

  addToCart(e) {
    this.api.addCartItems(e, this.auth_token).subscribe(res => {
		console.log(e);
      console.log(res);
    });
  }
  showProductPage(product) {

    const navigationExtras: NavigationExtras = {
      queryParams: {
        'user': product

      }
    };

    this.router.navigate(['/visitor/detailProduct'], navigationExtras  );

    }
<<<<<<< Updated upstream
  myClick(){
    console.log(this.size + this.sesso + this.categoria)
    this.api.getProductsFiltri(this.size,this.categoria,this.sesso).subscribe(
      res => {

        this.products = res.oblist;
<<<<<<< Updated upstream
      
=======
  myClick() {
    console.log(this.size + this.sesso + this.category);
    this.api.getProductsFiltri(this.size, this.category, this.sesso).subscribe(
      res => {

        this.products = res.oblist;
        console.log('Prodotti' + this.products[0].productid);
>>>>>>> Stashed changes
=======

>>>>>>> Stashed changes
      }
    );
  }

  }
