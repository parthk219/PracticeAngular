import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, ChildComponent, FormsModule],
  template: `
    <div class="parent-container">
      <h2>👨‍👦 Parent Component</h2>
      
      <div class="data-flow">
        <div class="to-child">
          <h3>📤 Sending to Child:</h3>
          <input [(ngModel)]="parentMessage" placeholder="Type message for child">
          <input [(ngModel)]="parentCount" type="number" placeholder="Enter number">
        </div>

        <div class="from-child">
          <h3>📥 Receiving from Child:</h3>
          <p><strong>Child Message:</strong> {{ childMessage }}</p>
          <p><strong>Child Count:</strong> {{ childCount }}</p>
        </div>
      </div>

      <!-- Child Component with @Input and @Output -->
      <app-child 
        [messageFromParent]="parentMessage"
        [countFromParent]="parentCount"
        (messageToParent)="onChildMessage($event)"
        (countToParent)="onChildCount($event)">
      </app-child>
    </div>
  `,
  styles: [`
    .parent-container {
      border: 3px solid #007bff;
      padding: 20px;
      margin: 20px;
      border-radius: 10px;
      background: #f8f9fa;
    }
    .data-flow {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin: 20px 0;
    }
    .to-child, .from-child {
      padding: 15px;
      border-radius: 8px;
    }
    .to-child { background: #e3f2fd; border: 2px dashed #2196f3; }
    .from-child { background: #e8f5e8; border: 2px dashed #4caf50; }
    input {
      padding: 8px;
      margin: 5px;
      border: 1px solid #ccc;
      border-radius: 4px;
      width: 200px;
      display: block;
    }
  `]
})
export class ParentComponent {
  parentMessage = '';
  parentCount = 10;
  
  childMessage = '';
  childCount = 0;

  onChildMessage(message: string) {
    this.childMessage = message;
  }

  onChildCount(count: number) {
    this.childCount = count;
  }
}

// PARENT --> CHILD

// 0. <input [(ngModel)]="parentMessage" placeholder="Type message for child">
// 1. Parent apne template me child ko call karta hai: `<app-child [messageFromParent]="parentMessage">`.
// 2. `[ ]` ka matlab hai — **parent variable ko child property se bind karna**.
// 3. Child component me `@Input()` se property define hoti hai — Angular yaha value inject karta hai.
// 4. Jab parent ka data change hota hai, wo automatic child me update hota hai.
// 5. Ye flow **one-way (Parent → Child)** hota hai, child ise sirf read kar sakta hai.
