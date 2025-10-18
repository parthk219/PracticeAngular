import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="counter-container">
      <h2>Counter: {{ count }}</h2>
      <button (click)="increment()" class="btn btn-primary">Add +1</button>
      <button (click)="decrement()" class="btn btn-secondary">Subtract -1</button>
      <button (click)="reset()" class="btn btn-reset">Reset</button>
    </div>
  `,
  styles: [`
    .counter-container {
      text-align: center;
      padding: 20px;
      border: 2px solid #007bff;
      border-radius: 10px;
      max-width: 300px;
      margin: 20px auto;
      background-color: #f8f9fa;
    }
    h2 {
      color: #333;
      margin-bottom: 20px;
    }
    .btn {
      padding: 10px 15px;
      margin: 5px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 14px;
      transition: background-color 0.3s;
    }
    .btn-primary {
      background-color: #007bff;
      color: white;
    }
    .btn-primary:hover {
      background-color: #0056b3;
    }
    .btn-secondary {
      background-color: #6c757d;
      color: white;
    }
    .btn-secondary:hover {
      background-color: #545b62;
    }
    .btn-reset {
      background-color: #dc3545;
      color: white;
    }
    .btn-reset:hover {
      background-color: #c82333;
    }
  `]
})
export class CounterComponent {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }
}