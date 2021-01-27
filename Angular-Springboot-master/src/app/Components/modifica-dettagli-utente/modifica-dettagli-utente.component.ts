import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../Service/api.service";
import {FormBuilder} from '@angular/forms';
import {User} from "../../Model/user";

@Component({
  selector: 'modifica-dettagli-utente',
  templateUrl: './modifica-dettagli-utente.component.html',
  styleUrls: ['./modifica-dettagli-utente.component.css']
})
export class ModificaDettagliUtenteComponent implements OnInit {

	dataEditForm: any;
	auth: string;
  status: string;
	utente: User = {
    id: 0,
    email: '',
    username: '',
    password: '',
    usertype: '',
    age: ''
  };
	@ViewChild('userType') myUser: ElementRef;
	@ViewChild('mailType') myEmail: ElementRef;
  @ViewChild('pwdType') myPassword: ElementRef;
  @ViewChild('ageType') myAge: ElementRef;

	constructor(private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { /*this.createForm();*/}

  ngOnInit() {
  	 if (this.api.isAuthenticated) {
      this.auth = this.api.getToken();
      this.api.getUserbyId(this.auth).subscribe(
        res => {
          this.utente = res.object;
        }
      );
    }


  }

  update(utente: User){
    this.utente.username = this.myUser.nativeElement.value;
    this.utente.email = this.myEmail.nativeElement.value;
    this.utente.password = this.myPassword.nativeElement.value;
    this.utente.age = this.myAge.nativeElement.value;

    this.api.updateUser(utente, this.auth).subscribe(
      res => {
        this.status ='ok';
      }
    );

  }


}
