import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import {Product} from "../../../Model/product";
import {ApiService} from "../../../Service/api.service";

@Component({
  selector: 'uomo',
  templateUrl: './uomo.component.html',
  styleUrls: ['./uomo.component.css']
})
export class UomoComponent implements OnInit {

  products: Product[] = [];
  sex: string = "M";

  constructor(private api: ApiService,private router: Router,private _route : ActivatedRoute) { }

  ngOnInit() {
    this.api.getProductsBySex(this.sex).subscribe(
      res => {
        this.products = res.oblist;
      }
    );
  }
  attivaFiltri(products) {

    console.log(products);

    }
    showProductPage(product) {
      console.log(product)
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "user": product
  
        }
      };
  
      this.router.navigate(['/visitor/detailProduct'], navigationExtras  );
  
      }
}
