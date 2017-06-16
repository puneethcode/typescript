import {Component} from '@angular/core';

@Component({
    selector: 'app-header',
    template: require('./header.html'),
    styleUrls: ['./header.scss']
})
export class HeaderComponent {
    appTitle = 'schoolbook';
}

// '<nav class="sbw-header-navigator"><h1>{{textTest}}</h1></nav>',
