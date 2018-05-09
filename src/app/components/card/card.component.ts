import { Component } from '@angular/core';
import {AccountService} from '../../services/account/account.service';
import {ApiService} from '../../services/api/api.service';
import { OnInit } from '@angular/core';
import { Meal } from '../../interfaces/meal';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  title = 'Meal app';
  meals: Meal[] = [];

  constructor(private accountService: AccountService, private apiService: ApiService ) {
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
    console.log(meal);
  }

}
