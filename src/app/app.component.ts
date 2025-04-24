import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [MatSidenavModule, RouterModule],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
