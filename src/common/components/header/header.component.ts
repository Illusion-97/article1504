import {Component} from '@angular/core';
import {AsyncPipe, TitleCasePipe} from "@angular/common";
import {DarkmodeService} from "../../services/darkmode.service";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {AuthService} from "../../../auth/services/auth.service";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        AsyncPipe, RouterOutlet, RouterLink, RouterLinkActive, TitleCasePipe
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {

    constructor(public service: DarkmodeService, protected auth: AuthService) {
    }
}
