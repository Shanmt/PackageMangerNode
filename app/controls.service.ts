import {Injectable} from 'angular2/core';
import {Http,Response} from 'angular2/http';

@Injectable()
export class ControlService{

    constructor(private http: Http){

    }

    getControlSettings(controls){
      console.log( this.http.get('http://localhost:8000/getControlSettings?control='+controls).map((res:Response) => res.json()) ); 
    }

}