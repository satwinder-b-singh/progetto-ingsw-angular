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
  totalSum = 0;
  constructor(private api: ApiService, private route: Router, private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.auth = this.api.getToken();
    this.api.getCartItems(this.auth).subscribe(res => {
      this.cartlist = res.oblist;
	  this.totalSum = 0;
      this.cartlist.forEach(value => {
        this.totalSum = this.totalSum + (value.quantity * value.price); console.log(this.totalSum);
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
      regione: '',
      CAP: '',
      email: '',
      phone: '',
    });
  }
  checkout() {
    console.log(this.checkoutForm);
    this.place();
    // tslint:disable-next-line:comment-format
   // this.api.checkout(this.auth ). //this.checkoutForm.value ,
     // subscribe(res => {
       // if (res.status == '200'  ) {
         //   this.place();
        //} else {
          //this.route.navigate(['/home']);
           // alert('non passa il checkout');
        //}
      }//,
        //err => {
          //alert('An error has occured, Please try again !!!');
        //});



  place() {
    this.api.place(this.auth).subscribe(res => {
       if(res.status == '200')
         this.route.navigate(['home/cart/checkout/summary']);
        else
          alert('Non siamo riusciti ad effettuare il pagamento')

    });

  }


}
