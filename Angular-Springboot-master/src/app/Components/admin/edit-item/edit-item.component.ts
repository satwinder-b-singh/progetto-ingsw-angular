import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Model/product';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  product: Product = {
    productid: 0,
    description: '',
    productname: '',
    price: 0,
    quantity: 0,
    category: '',
    size: '',
    sex: '',
    productimage: null
  };
  products: Product[] = [];
  fileToUpload: File = null;
  auth: string;
  prodid: string;
  imageUrl = '/assets/img/noimage.png';

  constructor(private route: ActivatedRoute, private api: ApiService) {
    if (this.api.isAuthenticated) {
      this.auth = this.api.getToken();
      this.api.getProducts(this.auth).subscribe(
        res => {
          res.oblist.forEach(pro => {
            if (pro.productid == this.prodid) {
              this.product = pro;
              this.fileToUpload = pro.productimage;
            }
          });
        }
      );
    }
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('siamo qi');
      console.log(params['user']);
      console.log(this.prodid);
      this.prodid = params['user'];
      console.log(this.prodid);
    });
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }

  updateProd(prodname, desc, quan, price, cat, size, sex, image) {

    console.log( this.product.productid);
    this.api.updateProduct(this.auth, desc.value, quan.value, price.value, prodname.value, this.fileToUpload, this.prodid , cat.value, size.value, sex.value).subscribe(res => {
      console.log(res);
    });
  }

}
