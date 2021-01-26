import { Component, OnInit } from '@angular/core';
import {Product} from "../../Model/product";
import {ApiService} from "../../Service/api.service";

@Component({
  selector: 'pantaloni',
  templateUrl: './pantaloni.component.html',
  styleUrls: ['./pantaloni.component.css']
})
export class PantaloniComponent implements OnInit {

  products: Product[] = [];
  categoria: string = "Pantalone";

  constructor(private api: ApiService) { }


  ngOnInit() {
    this.api.getProductsByCategroy(this.categoria).subscribe(
      res => {
        this.products = res.oblist;
      }
    );
  }
}
