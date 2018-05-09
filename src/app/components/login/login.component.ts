import { Component } from '@angular/core';
import {AccountService} from '../../services/account/account.service';
import {ApiService} from '../../services/api/api.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Meal app';
  meals: any = [];

  constructor(private accountService: AccountService, private apiService: ApiService ) {
    this.accountService = accountService;
  }
  ngOnInit() {
  }


}
