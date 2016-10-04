// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX


///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap}              from 'angular2/platform/browser'
import {AppComponent}           from './app'
import {provide, Component} from 'angular2/core';


import {
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
} from 'angular2/router';


import {MinimalLogger, LoggerService, DateLoggerService} from './loggerService';

bootstrap(AppComponent,
    [
        provide(MinimalLogger, { useClass: DateLoggerService }),
        ROUTER_PROVIDERS
    ]
);