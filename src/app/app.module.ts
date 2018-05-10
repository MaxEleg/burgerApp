import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule   } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { CartReducer } from './stores/cart/cart.reducer';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './components/root/root.component';
import { NavBarComponent } from './components/nav/navbar.component';
import { CardComponent } from './components/card/card.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FooterComponent } from './components/footer/footer.component';

import { AccountService } from './services/account/account.service';
import { ApiService } from './services/api/api.service';


@NgModule({
  declarations: [
    RootComponent,
    NavBarComponent,
    CardComponent,
    LoginComponent,
    RegisterComponent,
    ShoppingCartComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({
      cart: CartReducer
    })
  ],
  providers: [
    AccountService,
    ApiService,
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
