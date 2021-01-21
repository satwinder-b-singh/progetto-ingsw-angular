import { Component, OnInit } from '@angular/core';
import {Product} from "../../Model/product";
import {ApiService} from "../../Service/api.service";

@Component({
  selector: 'app-maglie',
  templateUrl: './maglie.component.html',
  styleUrls: ['./maglie.component.css']
})
export class MaglieComponent implements OnInit {

  products: Product[] = [];
  categoria: string = "Maglie";

  constructor(private api: ApiService) { }


  ngOnInit() {
    this.api.getProductsByCategroy(this.categoria ).subscribe(
      res => {
        this.products = res.oblist;
      }
    );
  }

}
