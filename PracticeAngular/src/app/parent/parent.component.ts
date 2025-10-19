import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, FormsModule, ChildComponent],
  template: `
    <div style="border: 2px solid blue; padding: 20px; margin: 10px; background: #f0f8ff;">
      <h1>👨‍👦 Parent Component</h1>
      
      <!-- Data input fields -->
      <div style="margin: 15px 0;">
        <h3>📤 Child ko Data Bhejo:</h3>
        
        <div style="margin: 10px 0;">
          <label>Message: </label>
          <input [(ngModel)]="message" placeholder="Type message for child" style="margin: 5px; padding: 5px;">
        </div>
        
        <div style="margin: 10px 0;">
          <label>Count: </label>
          <input type="number" [(ngModel)]="count" style="margin: 5px; padding: 5px;">
        </div>
        
        <div style="margin: 10px 0;">
          <label>User Name: </label>
          <input [(ngModel)]="user.name" placeholder="Name" style="margin: 5px; padding: 5px;">
        </div>
        
        <div style="margin: 10px 0;">
          <label>User Age: </label>
          <input type="number" [(ngModel)]="user.age" placeholder="Age" style="margin: 5px; padding: 5px;">
        </div>
        
        <div style="margin: 10px 0;">
          <label>New Item: </label>
          <input [(ngModel)]="newItem" placeholder="Add to list" style="margin: 5px; padding: 5px;">
          <button (click)="addItem()" style="margin: 5px; padding: 5px 10px; background: #28a745; color: white; border: none;">Add Item</button>
        </div>
      </div>

      <!-- Child Component ko data bhejo -->
      <app-child 
        [parentMessage]="message"
        [countFromParent]="count"
        [userData]="user"
        [items]="items">
      </app-child>

      <!-- Current Data Display -->
      <div style="margin-top: 20px; padding: 15px; background: #e7f3ff; border-radius: 8px;">
        <h3>📊 Current Parent Data:</h3>
        <p>Message: "{{ message }}"</p>
        <p>Count: {{ count }}</p>
        <p>User: {{ user.name }} ({{ user.age }} years)</p>
        <p>Items: {{ items.join(', ') }}</p>
      </div>
    </div>
  `
})
export class ParentComponent {
  // Data jo child ko bhejenge
  message: string = 'Hello from Parent!';
  count: number = 10;
  user: any = { name: 'John', age: 25 };
  items: string[] = ['Apple', 'Banana', 'Orange'];
  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  }
}