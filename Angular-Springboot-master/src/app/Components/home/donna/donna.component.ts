import { Component, OnInit } from '@angular/core';
import {Product} from "../../../Model/product";
import {ApiService} from "../../../Service/api.service";

@Component({
  selector: 'donna',
  templateUrl: './donna.component.html',
  styleUrls: ['./donna.component.css']
})
export class DonnaComponent implements OnInit {

  products: Product[] = [];
  sex: string = "F";

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getProductsBySex(this.sex).subscribe(
      res => {
        this.products = res.oblist;
        console.log(this.products);
      }
    );
  }
}
