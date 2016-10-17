
////<reference path="../node_modules/@angular/typings/browser.d.ts"/>
///<reference path="./appService.ts"/>

import {Component} from '@angular/core';
import {NgModule} from '@angular/core';
import {AppService} from './appService';
import {HomeComponent, AboutUsComponent, ContactUsComponent} from './homeComponent';

import { RouterModule }   from '@angular/router'

@Component({
    selector: 'my-menu',
    template: `
            <ul class="nav nav-tabs">
                <li [routerLinkActive]="['active']" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['']">Home</a></li>
                <li [routerLinkActive]="['active']"><a [routerLink]="['aboutus']">About</a></li>
                <li [routerLinkActive]="['active']"><a [routerLink]="['contactus']">Contact</a></li>
            </ul>`,
    providers: [AppService],
    styles: [`.router-link-active { background-color: red; }`]
})
export class AppMenuComponent {
    private title: string;

    constructor(private myService: AppService) {

        // this.title = this.myService.getInfo();
    }
}


/*

                <h1>{{Title}}</h1>
*/