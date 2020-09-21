import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/mercado/environment';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  env = environment
  products$: Observable<ProductModel[]>
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.productsService.getAllProducts()
    .pipe(
      map(res => res.payload)
    )    
  }

}
