import { Component } from '@angular/core';
import {AccountService} from '../../services/account/account.service';
import {ApiService} from '../../services/api/api.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  months: string[] = [
    'Janvier',

  ];

  constructor(private accountService: AccountService, private apiService: ApiService ) {
    this.accountService = accountService;
  }
  ngOnInit() {
  }


}
