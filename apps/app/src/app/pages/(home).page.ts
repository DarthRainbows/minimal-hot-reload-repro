import { Component } from '@angular/core';

import { HomeComponent } from '../components';

@Component({
  selector: 'app-home-page',
  imports: [HomeComponent],
  template: `<app-home />`,
})
export default class HomePage {}
