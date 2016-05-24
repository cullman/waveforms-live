import {Component} from 'angular2/core';
import {IONIC_DIRECTIVES} from 'ionic-angular';

//Components
import {FgenComponent} from '../function-gen/function-gen.component';
import {TriggerComponent} from '../trigger/trigger.component';

@Component({
  templateUrl: 'build/components/side-bar/side-bar.html',
  selector: 'side-bar',
  directives: [IONIC_DIRECTIVES, FgenComponent, TriggerComponent]
})
export class SideBarComponent { 
    
    constructor() {
    
    }
}