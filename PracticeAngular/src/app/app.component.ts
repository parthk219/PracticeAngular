import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ← Ye import karna important hai

@Component({
  selector: 'app-root',
  standalone: true, // ← Yeh line honi chahiye
  imports: [CommonModule, FormsModule], // ← FormsModule yahan add karein
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string = 'Angular User';
}