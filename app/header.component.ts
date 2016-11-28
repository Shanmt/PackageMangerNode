import {Component} from 'angular2/core';
import {ControlsComponent} from './controls.component';
import {AuthenticationService} from './authentication.service';
import {Http} from 'angular2/http';


@Component({
    selector: 'app-head',
    templateUrl: 'app/views/header.component.html',
    directives:[ControlsComponent],
    providers: [AuthenticationService]

})

export class HeaderComponent{
    LoginUserName;
    constructor(
        private _service:AuthenticationService, private http:Http){
           var userdetails = localStorage.getItem("user"); 
           
           if(userdetails){
             var user = JSON.parse(userdetails);
             this.LoginUserName = user.name;
           }
           else{
             this.LoginUserName = "User";
           }
          
                      
        }

    ngOnInit(){
       
        this._service.checkCredentials();
    }

    logout() {
        
        this._service.logout();
    }
}