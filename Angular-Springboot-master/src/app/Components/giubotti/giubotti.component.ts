import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../Service/api.service';
import {Product} from '../../Model/product';

@Component({
  selector: 'giubotti',
  templateUrl: './giubotti.component.html',
  styleUrls: ['./giubotti.component.css']
})
export class GiubottiComponent implements OnInit {
  products: Product[] = [];
 categoria: string = "Giubotto";

  constructor(private api: ApiService) { }


  ngOnInit() {
    this.api.getProductsByCategroy(this.categoria).subscribe(
      res => {
        this.products = res.oblist;
      }
    );
  }

}
