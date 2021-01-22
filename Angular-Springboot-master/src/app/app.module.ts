import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {StorageServiceModule} from 'angular-webstorage-service';
import {Router, Routes, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { AuthguardGuard } from './Service/authguard.guard';
import { AdminComponent } from './Components/admin/admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './Components/home/product/product.component';
import { CartItemComponent } from './Components/home/cart-item/cart-item.component';
import { AddressComponent } from './Components/home/address/address.component';
import { EditItemComponent } from './Components/admin/edit-item/edit-item.component';
import { OrderItemComponent } from './Components/admin/order-item/order-item.component';
import { ProductDComponent } from './Components/product-d/product-d.component';
import { AboutComponent } from './Components/home/about/about.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MaglieComponent } from './Components/maglie/maglie.component';
import { CamicieComponent } from './Components/camicie/camicie.component';
import { PantaloniComponent } from './Components/pantaloni/pantaloni.component';
import { GiubottiComponent } from './Components/giubotti/giubotti.component';
import { FiltriComponent } from './Components/filtri/filtri.component';

const appRoutes:Routes=[
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
{
  path:'login',
  component: LoginComponent
},
{
  path:'register',
  component: RegisterComponent
},
{
  path:'admin',
  component: AdminComponent
}
,
{
  path:'home',
  component: HomeComponent,
  canActivate:[AuthguardGuard]
},
  {
    path:'visitor/detailProduct',
    component: ProductDComponent,
    canActivate:[AuthguardGuard]
  },
{
  path:'home/cart',
  component: CartItemComponent,
  canActivate:[AuthguardGuard]
},
{
  path:'home/address',
  component: AddressComponent,
  canActivate:[AuthguardGuard]
},
{
  path:'admin/edit',
  component: EditItemComponent,
  canActivate:[AuthguardGuard]
},
{
  path:'admin/order',
  component: OrderItemComponent,
  canActivate:[AuthguardGuard]
},
{
  path:'home/about',
  component: AboutComponent,
  canActivate:[AuthguardGuard]
},
{
  path:'home/maglie',
  component: MaglieComponent,
  canActivate:[AuthguardGuard]
},
{
  path:'home/giubotti',
  component: GiubottiComponent,
  canActivate:[AuthguardGuard]
},
{
  path:'home/camicie',
  component: CamicieComponent,
  canActivate:[AuthguardGuard]
},
{
  path:'home/pantaloni',
  component: CamicieComponent,
  canActivate:[AuthguardGuard]
}

];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    HomeComponent,
    CartItemComponent,
    AddressComponent,
    AdminComponent,
    EditItemComponent,
    OrderItemComponent,
    ProductDComponent,
    AboutComponent,
    FooterComponent,
    MaglieComponent,
    CamicieComponent,
    PantaloniComponent,
    GiubottiComponent,
    FiltriComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    StorageServiceModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
