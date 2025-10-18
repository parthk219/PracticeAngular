import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-showhide',
  standalone: true,                    // ✅ Standalone component (Angular 14+ feature)
  imports: [CommonModule, FormsModule], // ✅ ngIf, ngClass, ngModel ke liye modules
  template: `
    <h2>Show / Hide Example</h2>

    <!-- ✅ Two-way data binding -->
    <!-- Checkbox se visible variable ka value change hoga -->
    <label>
      <input type="checkbox" [(ngModel)]="visible"> Show Box
    </label>

    <hr>

    <!-- ✅ Property Binding -->
    <div [hidden]="!visible" class="box">
      I am using [hidden]
    </div>

    <!-- ✅ Structural Directive (*ngIf) -->
    <div *ngIf="visible" class="box">
      I am using *ngIf
    </div>

    <!-- ✅ Class Binding -->
    <div [class.hidden]="!visible" [class.active]="visible" class="box">
      I am using [class]
    </div>

    <!-- ✅ ngClass Directive -->
    <div [ngClass]="getBoxClasses()" class="box">
      I am using [ngClass]
    </div>

    <hr>

    <!-- ✅ Interpolation + Pipe -->
    <p>Visible: {{ visible ? 'Yes' : 'No' }}</p>
    <p>Classes Applied: {{ getBoxClasses() | json }}</p>
  `,
  styles: [`
    .box {
      margin: 10px 0;
      padding: 10px;
      border: 2px solid #2196f3;
      border-radius: 5px;
      transition: all 0.3s ease;
    }

    .active {
      background: #e8f5e8;
      border-color: #4caf50;
    }

    .hidden {
      display: none;
    }

    .highlight {
      background: #fff3cd;
      border-color: #ffc107;
    }

    .large {
      font-size: 18px;
      font-weight: bold;
    }
  `]
})
export class ShowhideComponent {
  visible = true;  // ✅ Component property (data source for bindings)

  // ✅ ngClass ke liye method jo multiple classes return karta hai
  getBoxClasses() {
    return {
      'active': this.visible,
      'highlight': this.visible,
      'large': this.visible
    };
  }
}
