import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent],
  template: `
    <h1>My Angular App</h1>
    <app-counter></app-counter>
   <!-- <app-counter></app-counter> -->
     <!-- Multiple counters can be used -->
  `
})
export class AppComponent {
  title = 'event-binding-demo';
}