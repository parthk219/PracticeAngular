import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `
    <div style="border: 2px solid green; padding: 15px; margin: 10px;">
      <h3>Child</h3>
      <input [(ngModel)]="childData" placeholder="Enter data">
      <button (click)="sendToParent()">Send to Parent</button>
    </div>
  `,
  imports: [FormsModule]
})
export class ChildComponent {
  @Output() dataToParent = new EventEmitter<string>();
  childData: string = '';

  sendToParent() {
    this.dataToParent.emit(this.childData);
    this.childData = '';
  }
}