import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="child-container">
      <h3>👶 Child Component</h3>
      
      <!-- Display data from Parent (@Input) -->
      <div class="received-data">
        <h4>📨 Received from Parent:</h4>
        <p><strong>Message:</strong> {{ messageFromParent }}</p>
        <p><strong>Count:</strong> {{ countFromParent }}</p>
      </div>

      <!-- Send data to Parent (@Output) -->
      <div class="send-data">
        <h4>📤 Send to Parent:</h4>
        <input [(ngModel)]="childMessage" placeholder="Type message for parent">
        <button (click)="sendMessageToParent()">Send Message</button>
        
        <br><br>
        
        <input [(ngModel)]="childCount" type="number" placeholder="Enter number">
        <button (click)="sendCountToParent()">Send Count</button>
        
        <br><br>
        
        <button (click)="incrementAndSend()">Increment & Send</button>
      </div>
    </div>
  `,
  styles: [`
    .child-container {
      border: 2px solid #ff9800;
      padding: 20px;
      margin: 15px 0;
      border-radius: 8px;
      background: white;
    }
    .received-data {
      background: #fff3cd;
      padding: 15px;
      border-radius: 6px;
      margin-bottom: 15px;
    }
    .send-data {
      background: #d1ecf1;
      padding: 15px;
      border-radius: 6px;
    }
    input {
      padding: 8px;
      margin: 5px;
      border: 1px solid #ccc;
      border-radius: 4px;
      width: 200px;
    }
    button {
      padding: 8px 15px;
      margin: 5px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background: #0056b3;
    }
  `]
})
export class ChildComponent {
  // @Input - Data receive from parent
  @Input() messageFromParent: string = '';
  @Input() countFromParent: number = 0;

  // @Output - Events to send data to parent
  @Output() messageToParent = new EventEmitter<string>();
  @Output() countToParent = new EventEmitter<number>();

  childMessage: string = '';
  childCount: number = 0;

  sendMessageToParent() {
    this.messageToParent.emit(this.childMessage);
    this.childMessage = '';
  }

  sendCountToParent() {
    this.countToParent.emit(this.childCount);
    this.childCount = 0;
  }

  incrementAndSend() {
    this.countToParent.emit(this.countFromParent + 1);
  }
}