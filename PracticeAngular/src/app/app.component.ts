import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <h2>Number Array</h2>
      
      <input type="number" [(ngModel)]="newNumber">
      <button (click)="addNumber()">Add</button>
      <button (click)="deleteLast()">Delete Last</button>
      
      <div *ngIf="numbers.length > 0">
        <h3>Numbers:</h3>
        <div *ngFor="let num of numbers; let i = index">
          {{ i + 1 }}. {{ num }}
        </div>
        <p>Total: {{ numbers.length }} numbers</p>
      </div>
      
      <div *ngIf="numbers.length === 0">
        <p>No numbers added</p>
      </div>
    </div>
  `
})
export class AppComponent {
  numbers: number[] = [10, 20, 30]; // Starting with some numbers
  newNumber: number = 0;

  addNumber() {
    this.numbers.push(this.newNumber);
    this.newNumber = 0;
  }

  deleteLast() {
    this.numbers.pop();
  }
}