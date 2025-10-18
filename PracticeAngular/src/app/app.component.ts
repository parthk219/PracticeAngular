import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h1>Welcome to My App!</h1>
    <input type="text" [(ngModel)]="name" >
    <p>Hello, {{ name }}!</p>
    <button (click)="showAlert()">Click Me</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Angular User';

  showAlert() {
    alert('Hello ' + this.name);
  }
}