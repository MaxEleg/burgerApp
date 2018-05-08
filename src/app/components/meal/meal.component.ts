import { Component } from '@angular/core';
import {AccountService} from '../../services/account/account.service';
import {ApiService} from '../../services/api/api.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class
MealComponent {
  title = 'Meal app';

  constructor(private accountService: AccountService,private apiService: ApiService ) {
    this.accountService = accountService;
  }
  ngOnInit() {
    console.log(this.apiService.fetchMeals());
  }


  addMealToBasket(meal) {
    console.log(meal);
  }

}
