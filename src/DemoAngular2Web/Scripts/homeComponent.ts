import {Component} from '@angular/core';
import {AfterContentInit} from '@angular/core';
import {ElementRef} from '@angular/core';
import {HelloComponent} from './Components/HelloComponent'

@Component({
    template: '<p>home</p>'
})
export class HomeComponent {

}


@Component({
    template: '<p>about</p>'
})
export class AboutUsComponent extends Component implements AfterContentInit {
    constructor(private el: ElementRef) {
        super(el);
    }

    ngAfterContentInit(): void {
        
        ReactDOM.render(
            React.createElement(HelloComponent, null),
            this.el.nativeElement);
        
    }
}

@Component({
    template: '<p>contact</p>'
})
export class ContactUsComponent {

}

@Component({
    template: '<p>Page is not found</p>'
})
export class PageNotFoundComponent {

}