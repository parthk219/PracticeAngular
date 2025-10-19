import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="border: 2px solid green; padding: 15px; margin: 10px; background: #f0fff0;">
      <h2>👶 Child Component</h2>
      
      <div style="margin: 10px 0;">
        <h3>📨 Parent ka Data:</h3>
        <p><strong>Message:</strong> {{ parentMessage }}</p>
        <p><strong>Count:</strong> {{ countFromParent }}</p>
        <p><strong>User:</strong> {{ userData?.name }} (Age: {{ userData?.age }})</p>
      </div>

      <div *ngIf="items.length > 0">
        <h4>🛍️ Items List:</h4>
        <div *ngFor="let item of items; let i = index" style="padding: 5px; border-bottom: 1px solid #ccc;">
          {{ i + 1 }}. {{ item }}
        </div>
      </div>
    </div>
  `
})
export class ChildComponent {
  @Input() parentMessage: string = '';
  @Input() countFromParent: number = 0;
  @Input() userData: any = null;
  @Input() items: string[] = [];
}