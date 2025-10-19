import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  template: `
    <div style="border: 2px solid blue; padding: 15px; margin: 10px;">
      <h2>Parent</h2>
      <p>Data from Child: {{ receivedData }}</p>
      <app-child (dataToParent)="onDataReceived($event)"></app-child>
    </div>
  `
})
export class ParentComponent {
  receivedData: string = '';

  onDataReceived(data: string) {
    this.receivedData = data;
  }
}