import { Component } from '@angular/core';
import {DarkmodeService} from "../../services/darkmode.service";

@Component({
  selector: 'app-header-second',
  standalone: true,
  imports: [],
  templateUrl: './header-second.component.html',
  styleUrl: './header-second.component.css'
})
export class HeaderSecondComponent {

  constructor(protected dark: DarkmodeService) {
  }

}
