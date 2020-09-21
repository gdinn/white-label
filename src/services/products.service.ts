import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../environments/mercado/environment';
import { ResponseModel } from '../models/response.model';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseref = environment.baseref

  constructor(
    private http: HttpClient
  ) {}

  getAllProducts(): Observable<any> {
    return this.http.get<ResponseModel<ProductModel>>(this.baseref)
  }
}
