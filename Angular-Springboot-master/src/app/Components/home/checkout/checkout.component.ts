import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Model/cart';
import { ApiService } from 'src/app/Service/api.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  private checkoutForm: any;
  private auth: string;
  cartlist: Cart[];
  totalSum: number = 0;
  constructor(private api: ApiService, private route: Router, private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.auth = this.api.getToken();
    this.api.getCartItems(this.auth).subscribe(res => {
      this.cartlist = res.oblist;
	  this.totalSum=0;
      this.cartlist.forEach(value => {
        this.totalSum = this.totalSum + (value.quantity * value.price);console.log(this.totalSum);
      });
    });

  }

  createForm() {
    this.checkoutForm = this.formBuilder.group({
      nome: '',
      cognome: '',
      nazione: '',
      indirizzo: '',
      città: '',
      regione:'',
      CAP: '',
      email:'',
      phone:'',
    });
  }
  checkout(){
    console.log(this.checkoutForm)
    this.api.checkout(this.checkoutForm.value).
      subscribe(res => {
        if (res.status == "400") {


          console.log("Details cannot be empty");
        } else {
          this.route.navigate(['/summary']);
        }
      },
        err => {
          alert("An error has occured, Please try again !!!");
        });
  }
  place() {
    this.api.place(this.auth).subscribe(res => {
      console.log(res);
    });
    this.route.navigate(['/home']);
  }


}
