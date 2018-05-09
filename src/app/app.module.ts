import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule   } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { MealStoreReducer } from './reducers/mealstore.reducer';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './components/root/root.component';
import { NavBarComponent } from './components/nav/navbar.component';
import { CardComponent } from './components/card/card.component';
import { LoginComponent } from './components/login/login.component';
import { AccountService } from './services/account/account.service';
import { ApiService } from './services/api/api.service';


@NgModule({
  declarations: [
    RootComponent,
    NavBarComponent,
    CardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({message: MealStoreReducer})
  ],
  providers: [
    AccountService,
    ApiService,
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
