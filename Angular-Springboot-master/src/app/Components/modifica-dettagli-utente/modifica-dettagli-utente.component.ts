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
	utente: User = {
    id: 0,
    email: '',
    username: '',
    password: '',
    usertype: '',
    age: ''
  };
	//@ViewChild('userType') myUser: ElementRef;
	//@ViewChild('mailType') myEmail: ElementRef; 
  //@ViewChild('pwdType') myPassword: ElementRef;
  //@ViewChild('ageType') myAge: ElementRef;

	constructor(private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { /*this.createForm();*/}

  ngOnInit() {
  	this.auth = this.api.getToken();
  	this.api.getUserbyId(this.auth).subscribe(
  			res => {
  				this.utente = res.object;
  			}
  		);



    if (this.api.isAuthenticated) {
      this.auth = this.api.getToken();
      this.api.getUserbyId(this.auth).subscribe(
        res => {
          this.utente = res.object;
        }
      );
    }

/*
  	this.myAge.nativeElement.value = 18;
  	//this.myEmail.nativeElement.value = "ako@sono.it";
  	this.myUser.nativeElement.value = "Rondo";
  	this.myPassword.nativeElement.value = "si";
  	*/
  	/*
  	var username = document.getElementById("username");
  	username.value = this.utente.username;
  	var username = document.getElementById("email");
  	username.value = "si@si.it";
  	var username = document.getElementById("eta");
  	username.value = "18";
  	*/
  }

  update(utente: User){
    this.api.updateUser(utente, this.auth);
  	//this.api.updateUser(utente);
  	/*
  	var username = document.getElementById("username");
  	username.value = "nome";
  	*/
  }

/*
  createForm() {
    this.dataEditForm = this.formBuilder.group({
			  email: "",
			  username: "",
			  password: "",
			  age: ""
    });
  }
*/
}
