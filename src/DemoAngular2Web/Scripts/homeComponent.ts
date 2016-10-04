import {Component} from 'angular2/core';

import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: '<p>home</p>'
})
export class HomeComponent {

}


@Component({
    directives: [ROUTER_DIRECTIVES],
    template: '<p>about</p>'
})
export class AboutUsComponent {

}

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: '<p>contact</p>'
})
export class ContactUsComponent {

}