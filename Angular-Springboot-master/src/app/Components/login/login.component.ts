import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: any;
  error = false;
  constructor(private apiService: ApiService,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }
  login(): void {
    this.apiService.userLogin(this.loginForm.value).
      subscribe(res => {
        
        // tslint:disable-next-line:triple-equals
        if (res.status == '200') {
          window.location.reload();
          this.apiService.storeToken(res.auth_TOKEN, "customer");
          this.router.navigate(['/home']);
          this.error = false;
        } else if (res.status == "500") {
          this.apiService.adminLogin(this.loginForm.value).
            subscribe(res => {
              if (res.status == "200") {
                window.location.reload();
                console.log("passo da admin");
                this.apiService.storeToken(res.auth_TOKEN, "admin");
                this.router.navigate(['/admin']);
              } else {
                alert("CREDENZIALI ERRATE, RIPROVA")
                this.router.navigate(['/login']);
              }
              this.error = false;
            },
              err => {
                console.log(err);
              });
        }
      },
        err => {
          console.log(err);
      });
  }
}
