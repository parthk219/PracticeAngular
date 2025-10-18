import { Component } from '@angular/core';
import { ShowhideComponent } from './showhide/showhide.component';
// OR for simple version:
// import { SimpleShowhideComponent } from './simple-showhide/simple-showhide.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShowhideComponent], // OR SimpleShowhideComponent
  template: `
    <app-showhide></app-showhide>
  `
})
export class AppComponent {
  title = 'property-binding-demo';
}