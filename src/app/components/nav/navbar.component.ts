import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {Meal} from '../../interfaces/index';
import {AppState} from '../../interfaces/index';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent {
  cart: Meal[] = [];

  constructor( private mealStore: Store<AppState>) {
    this.mealStore.select((state: AppState ) => {
      return state.cart;
    }).subscribe((meals: Meal[]) => {
      this.cart = meals;
    });
  }

}
