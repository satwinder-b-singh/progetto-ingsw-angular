import { Component, OnInit } from '@angular/core';
import {Product} from "../../Model/product";
import {ApiService} from "../../Service/api.service";

@Component({
  selector: 'camicie',
  templateUrl: './camicie.component.html',
  styleUrls: ['./camicie.component.css']
})
export class CamicieComponent implements OnInit {

  products: Product[] = [];
  categoria: string = "Camicia";

  constructor(private api: ApiService) { }


  ngOnInit() {
    this.api.getProductsVisitor().subscribe(
      res => {
        this.products = res.oblist;
      }
    );
  }

}
