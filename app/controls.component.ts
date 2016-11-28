import {Component} from 'angular2/core';
import {ControlService} from './controls.service';

@Component({
    selector: 'screen-controls',
    templateUrl: 'app/views/controls.component.html',
    providers: [ControlService]
})

export class ControlsComponent{
    constructor(private controlservice : ControlService){
        
    }
    
    this.controlservice.getControlSettings('text');
}