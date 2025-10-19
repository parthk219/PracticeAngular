import { Component } from '@angular/core';
import { ParentComponent } from './parent/parent.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent],
  template: `
    <div style="padding: 20px;">
      <h1>Child to Parent</h1>
      <app-parent></app-parent>
    </div>
  `
})
export class AppComponent {
  title = 'Child to Parent';
}