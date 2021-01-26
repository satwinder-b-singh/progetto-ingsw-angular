import { Component, OnInit } from '@angular/core';
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

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getProductsBySex(this.sex).subscribe(
      res => {
        this.products = res.oblist;
      }
    );
  }

}
