import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule   } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './components/root/root.component';
import { NavBarComponent } from './components/nav/navbar.component';
import { MealComponent } from './components/meal/meal.component';
import { AccountService } from './services/account/account.service';
import { ApiService } from './services/api/api.service';


@NgModule({
  declarations: [
    RootComponent,
    NavBarComponent,
    MealComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    AccountService,
    ApiService,
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
