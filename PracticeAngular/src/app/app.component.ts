import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './components/parent/parent.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ParentComponent, ProductListComponent],
  template: `
    <div class="app-container">
      <h1>🔄 Angular Component Communication</h1>
      
      <div class="sections">
        <!-- Basic Input/Output Example -->
        <section>
          <app-parent></app-parent>
        </section>

        <!-- Product List Example -->
        <section>
          <div class="product-demo">
            <h2>🛒 Product Management Demo</h2>
            
            <div class="controls">
              <input [(ngModel)]="newProductName" placeholder="Product name">
              <input [(ngModel)]="newProductPrice" type="number" placeholder="Price">
              <button (click)="addProduct()">Add Product</button>
            </div>

            <div class="product-info">
              <p><strong>Selected Product:</strong> {{ selectedProduct?.name || 'None' }}</p>
              <p><strong>Last Deleted ID:</strong> {{ lastDeletedId || 'None' }}</p>
            </div>

            <app-product-list 
              [products]="products"
              [listTitle]="'Available Products'"
              (productSelected)="onProductSelected($event)"
              (productDeleted)="onProductDeleted($event)">
            </app-product-list>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: [`
    .app-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    .sections {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
    section {
      border: 2px solid #6c757d;
      border-radius: 10px;
      padding: 20px;
      background: white;
    }
    .product-demo {
      padding: 20px;
    }
    .controls {
      margin: 20px 0;
      padding: 15px;
      background: #e9ecef;
      border-radius: 8px;
    }
    .controls input {
      padding: 8px;
      margin: 5px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    .controls button {
      padding: 8px 15px;
      background: #28a745;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .product-info {
      padding: 15px;
      background: #d1ecf1;
      border-radius: 6px;
      margin: 15px 0;
    }
  `]
})
export class AppComponent {
  // Product Demo Data
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 999, category: 'Electronics' },
    { id: 2, name: 'Mouse', price: 25, category: 'Electronics' },
    { id: 3, name: 'Keyboard', price: 75, category: 'Electronics' }
  ];

  newProductName = '';
  newProductPrice = 0;
  selectedProduct: Product | null = null;
  lastDeletedId: number | null = null;

  addProduct() {
    if (this.newProductName && this.newProductPrice > 0) {
      const newProduct: Product = {
        id: this.products.length + 1,
        name: this.newProductName,
        price: this.newProductPrice,
        category: 'General'
      };
      this.products.push(newProduct);
      this.newProductName = '';
      this.newProductPrice = 0;
    }
  }

  onProductSelected(product: Product) {
    this.selectedProduct = product;
    console.log('Product selected:', product);
  }

  onProductDeleted(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);
    this.lastDeletedId = productId;
    console.log('Product deleted:', productId);
  }
}