import {Component} from 'angular2/core';
import {ControlService} from './controls.service';

@Component({
    selector: 'screen-controls',
    templateUrl: 'app/views/controls.component.html',
    providers: [ControlService]
})

export class ControlsComponent{
    getSettingsDetails:string;
    constructor(
        private controlservice:ControlService) {
           
        }
        getSettings(controls){
            
           this.controlservice.getControlSettings(controls).subscribe(
               data => this.getSettingsDetails = data.fields,
               error => console.log("Error HTTP GET Service"),
               () => console.log("Job Done Get !")

           );
          
        }
    //this.controlservice.getControlSettings('text');
}