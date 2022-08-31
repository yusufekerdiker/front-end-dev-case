import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {
  constructor(private productService:ProductService) {}

  title = 'Bundles';
  filterText = '';
  bundles: Product[];
  
  ngOnInit() {
    this.productService.getProducts().subscribe((data)=>{
      this.bundles = data;
    });
  }
}
