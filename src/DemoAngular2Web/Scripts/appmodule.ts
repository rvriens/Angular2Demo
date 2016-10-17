
import { RouterModule }   from '@angular/router';
import {Component} from '@angular/core';
import {NgModule} from '@angular/core';
import {AppService} from './appService';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {HomeComponent, AboutUsComponent, ContactUsComponent, PageNotFoundComponent} from './homeComponent';

import {AppComponent} from './app';
import {AppMenuComponent} from './appMenu';

import {MinimalLogger, LoggerService, DateLoggerService} from './loggerService';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent},
            { path: 'aboutus', component: AboutUsComponent },
            { path: 'contactus', component: ContactUsComponent },
            { path: '**', component: PageNotFoundComponent }
        ])
    ],
    providers: [{ provide: MinimalLogger, useClass: DateLoggerService }],
    declarations: [
        HomeComponent,
        AboutUsComponent,
        ContactUsComponent,
        PageNotFoundComponent,
        AppComponent,
        AppMenuComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

// provide(MinimalLogger, { useClass: DateLoggerService }),