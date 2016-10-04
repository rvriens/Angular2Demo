
///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="./appService.ts"/>

import {Component} from 'angular2/core';
import {AppService} from './appService';
import {HomeComponent, AboutUsComponent, ContactUsComponent} from './homeComponent';

import {
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
    RouteConfig
} from 'angular2/router';

@Component({
    directives: [ROUTER_DIRECTIVES],
    selector: 'my-app',
    template: '<p><a [routerLink]="[\'AboutUs\']">about</a>{{Title}}<router-outlet></router-outlet></p>',
    providers: [AppService]
})
    // <a [routerLink]="Home">home</a><a [routerLink]="AboutUs">about</a>
    @RouteConfig([
    // {path:'/crisis-center', name: 'CrisisCenter', component: CrisisListComponent, useDefaultAs : true}
        { path: '/', component: HomeComponent, name: 'Home' },
    { path: '/aboutus', component: AboutUsComponent, name: 'AboutUs' },
    { path: '/contactus', component: ContactUsComponent, name: 'ContactUs' }
])
export class AppComponent {
    Title: string;

    constructor(private myService: AppService) {

        this.Title = this.myService.getInfo();
    }
}