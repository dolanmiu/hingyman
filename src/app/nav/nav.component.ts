import { Component } from '@angular/core';
class NavTab {
    text: string;
    route: string;
}
@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {

    links: Array<NavTab> = [
        {
            text: 'About Us',
            route: '#about'
        }
    ];

}
