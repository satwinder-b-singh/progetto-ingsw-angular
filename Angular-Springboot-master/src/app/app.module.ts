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
import { CheckoutComponent } from './Components/home/checkout/checkout.component';
import { SummaryComponent } from './Components/home/checkout/summary/summary.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UomoComponent } from './Components/home/uomo/uomo.component';
import { DonnaComponent } from './Components/home/donna/donna.component';
import { ListautentiComponent } from './Components/admin/listautenti/listautenti.component';

const appRoutes:Routes=[
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
{
  path:'login',
  component: LoginComponent,
  canActivate:[AuthguardGuard]
},
{
  path:'register',
  component: RegisterComponent,
  canActivate:[AuthguardGuard]
},
{
  path:'admin',
  component: AdminComponent,
  canActivate:[AuthguardGuard]
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
  path: 'home/cart/checkout',
  component: CheckoutComponent,
  canActivate:[AuthguardGuard]
},
{
  path: 'home/cart/checkout/summary',
  component: SummaryComponent,
  canActivate:[AuthguardGuard]
},
{
  path:'admin/edit',
  component: EditItemComponent,
  canActivate:[AuthguardGuard]
},
{
  path:'admin/listaU',
  component: ListautentiComponent,
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
},
{
  path:'home/user-detail',
  component: UserDetailComponent,
  canActivate:[AuthguardGuard]
},
  {
    path:'home/uomo',
    component: UomoComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path:'home/donna',
    component: DonnaComponent,
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
    FiltriComponent,
    CheckoutComponent,
    SummaryComponent,
    UserDetailComponent,
    UomoComponent,
    DonnaComponent,
    ListautentiComponent
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
