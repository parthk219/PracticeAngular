import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ParentComponent],
  template: `
    <div style="padding: 20px; font-family: Arial;">
      <h1>🔄 Angular Parent to Child Communication</h1>
      <p style="color: #666;">Parent se Child mein data kaise bhejte hain</p>
      
      <!-- Parent Component Use karo -->
      <app-parent></app-parent>
    </div>
  `
})
export class AppComponent {
  title = 'parent-child-demo';
}