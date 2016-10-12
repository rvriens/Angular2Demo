
////<reference path="../node_modules/@angular/typings/browser.d.ts"/>
///<reference path="./appService.ts"/>

import {Component} from '@angular/core';
import {NgModule} from '@angular/core';
import {AppService} from './appService';
import {HomeComponent, AboutUsComponent, ContactUsComponent} from './homeComponent';

import { RouterModule }   from '@angular/router'

@Component({
    selector: 'my-app',
    template: '<p><a [routerLink]="[\'aboutus\']">about</a>{{Title}}<router-outlet></router-outlet></p>',
    providers: [AppService]
})
export class AppComponent {
    Title: string;

    constructor(private myService: AppService) {

        this.Title = this.myService.getInfo();
    }
}