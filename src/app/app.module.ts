import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule   } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { CartReducer } from './stores/cart/cart.reducer';
import { AuthReducer } from './stores/auth/auth.reducer';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './components/root/root.component';
import { NavBarComponent } from './components/nav/navbar.component';
import { CardComponent } from './components/card/card.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartItemsComponent } from './components/shopping-cart-items/shopping-cart-items.component';
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
    ShoppingCartItemsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      cart: CartReducer,
      auth: AuthReducer
    })
  ],
  providers: [
    AccountService,
    ApiService,
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
