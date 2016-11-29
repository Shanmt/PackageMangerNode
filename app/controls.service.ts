import { Injectable } from 'angular2/core';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ControlService {
  getSettingsDetails;
  constructor(private http: Http) {

  }

  getControlSettings(controls) {

    return this.http.get('http://localhost:8000/getControlSettings?control=' + controls).map(res => res.json().details[0]);
    

  }

}