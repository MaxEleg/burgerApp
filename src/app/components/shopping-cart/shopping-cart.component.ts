import { Component } from '@angular/core';
import {AccountService} from '../../services/account/account.service';
import {ApiService} from '../../services/api/api.service';
import { OnInit } from '@angular/core';
import { Meal } from '../../interfaces/index';
import { AppState } from '../../interfaces/index';
import { Store } from '@ngrx/store';
import * as MealActions from '../../stores/cart/cart.actions';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  title = 'Meal app';
  meals: Meal[] = [];

  constructor(private accountService: AccountService, private apiService: ApiService, private store: Store<AppState> ) {
    this.accountService = accountService;
  }
  ngOnInit() {
    this.apiService.fetchMeals().subscribe((meals: Meal[]) => {
      this.meals = meals;
    }, error => {
      console.log(error);
    });
  }

  addMealToBasket(meal: Meal) {
    this.store.dispatch(new MealActions.AddMeal(meal));
  }
  removeToBasket(meal: Meal) {
    this.store.dispatch(new MealActions.RemoveMeal(meal));
  }

}
