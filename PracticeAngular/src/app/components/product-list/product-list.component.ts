import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-list">
      <h3>🛍️ {{ listTitle }}</h3>
      
      <div *ngFor="let product of products" class="product-item">
        <span class="product-name">{{ product.name }}</span>
        <span class="product-price">{{ '$' + product.price }}</span>
        <button (click)="onProductSelect(product)">Select</button>
        <button (click)="onProductDelete(product.id)" class="delete-btn">Delete</button>
      </div>

      <div *ngIf="products.length === 0" class="no-products">
        No products available
      </div>

      <div class="stats">
        Total Products: {{ products.length }}
        | Total Value: {{ '$' + getTotalValue() }}
      </div>
    </div>
  `,
  styles: [`
    .product-list {
      border: 2px solid #6f42c1;
      padding: 20px;
      border-radius: 8px;
      background: white;
      margin: 10px 0;
    }
    .product-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      margin: 5px 0;
      border: 1px solid #e9ecef;
      border-radius: 4px;
      background: #f8f9fa;
    }
    .product-name {
      font-weight: bold;
      flex: 2;
    }
    .product-price {
      color: #28a745;
      flex: 1;
    }
    button {
      padding: 5px 10px;
      margin-left: 10px;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }
    .delete-btn {
      background: #dc3545;
      color: white;
    }
    .no-products {
      text-align: center;
      color: #6c757d;
      font-style: italic;
      padding: 20px;
    }
    .stats {
      margin-top: 15px;
      padding: 10px;
      background: #e9ecef;
      border-radius: 4px;
      text-align: center;
      font-weight: bold;
    }
  `]
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Input() listTitle: string = 'Products'; // ← YEH IMPORTANT LINE ADD KARO
  
  @Output() productSelected = new EventEmitter<Product>();
  @Output() productDeleted = new EventEmitter<number>();

  onProductSelect(product: Product) {
    this.productSelected.emit(product);
  }

  onProductDelete(productId: number) {
    this.productDeleted.emit(productId);
  }

  getTotalValue(): number {
    return this.products.reduce((total, product) => total + product.price, 0);
  }
}