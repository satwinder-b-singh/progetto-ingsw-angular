import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Address } from 'src/app/Model/address';
import { ApiService } from 'src/app/Service/api.service';
import { Router } from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  private addressForm: any;

  model: Address = {
    nome: "",
    cognome: "",
    nazione: "",
    indirizzo: "",
    citta: "",        // L'ho modificato perchè città non va bene per l'HTML
    regione: "",
    CAP: "",
    email: "",
    phone: ""

  };
  auth: string;
  constructor(private api: ApiService, private route: Router,
              private formBuilder: FormBuilder) { this.createForm();}



  ngOnInit() {

    this.auth = this.api.getToken();
    this.api.getAddress(this.auth).subscribe(res => {
      if (res.map != null) {
        this.model = res.map;
      }
    }, err => {
      console.log(err);
    });
  }

  addAddress() {
     this.api.upAddress(this.auth, this.model).subscribe(res => {
      console.log(res);
      this.route.navigate(['/home']);
    });
  }

  createForm() {
    this.addressForm = this.formBuilder.group({
      nome: "",
      cognome: "",
      nazione: "",
      indirizzo: "",
      citta: "",        // L'ho modificato perchè città non va bene per l'HTML
      regione: "",
      CAP: "",
      email: "",
      phone: ""
    });
  }

  show() {

    console.log("Stampo il modello address");
    console.log(this.model);
    console.log("Stampo il modello forms"+this.addressForm.value);
   // console.log("Mi stampo i dati dell'Indirizzo : " + this.addressForm.nazione + this.addressForm.regione + this.addressForm.citta + this.addressForm.CAP + this.addressForm.phone);
  }




}
