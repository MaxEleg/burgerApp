import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


interface Account {
  username: { type: string};
  password: { type: string};
  lastName: { type: string};
  firstName: { type: string};
  birthdate: { type: any};
  mail: { type: string };
}


@Injectable()
export class AccountService {
  url: String;

  constructor(private http: HttpClientModule) {
    this.url = 'http://localhost:3000';
  }

  createAccount() {
    let urlRegister;
    urlRegister = this.url + '/account/register';

    // this.http.post(urlRegister);
  }

  auth(): void {
  }
}
