import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="increment()">Add</button>
    <p></p>
    <button (click)="decrement()">Subtract</button>
    <p></p>
    <button (click)="Reset()">Reset</button>
    <p></p>
    <span>{{ count }}</span>
  `
})
export class CounterComponent {
  count = 0;
  
  increment() { 
    this.count++; 
  }

  decrement(){
    this.count--;
  }
  Reset(){
    this.count=0;
    }
}