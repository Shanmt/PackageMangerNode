import { Injectable } from 'angular2/core';
import { Router } from 'angular2/router';
import { Http } from 'angular2/http';

export class User {
  constructor(
    public email: string,
    public password: string,
    public username: string

  ) { }
}


@Injectable()
export class AuthenticationService {

  constructor(
    private _router: Router, private http: Http) { }

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['Login']);
  }

  login(user) {
    this.http.get('http://localhost:8000/getUsers?email=' + user.email + '&password=' + user.password).subscribe(
      response => {
        if (response.json().status) {
          localStorage.setItem("user", JSON.stringify(response.json().user[0]))
          this._router.navigate(['Home']);
          return true;
        }

      },
      error => {
        
        console.log(error.text());

      }
    );

    return false;

  }

  checkCredentials() {
    if (localStorage.getItem("user") === null) {
      this._router.navigate(['Login']);
    }
  }
}
