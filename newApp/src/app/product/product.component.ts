import { Component, OnInit } from '@angular/core';
import { IProduct } from './iproduct';
import { ProductService } from '../shared/services/product.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  pageName: string = "List of products";

  imgWidth: number = 50;
  imgMargin: number = 2;
  showImage: boolean = false;
  //filterBy: string = "Car";
  _filterBy: string;
  listFilterProducts: any;
  errorMsg: string;

  products: IProduct[];

  constructor(private _productService: ProductService) {
    //this.products = this.listFilterProducts = _productService.getProducts();
    _productService.getProducts().subscribe(products => {
      this.products = this.listFilterProducts = products;
    }, error => this.errorMsg = error);
  }

  set filterBy(value) {
    this._filterBy = value;
    console.log(this._filterBy);
    this.listFilterProducts = this.filterBy ? this.performFilter(this.filterBy) : this.products;
  }

  get filterBy() {
    return this._filterBy;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit() {
    console.log('Component Initialized');
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  onRatingClicked(msg: string) {
    console.log(msg);
    this.pageName = this.pageName + ' ' + msg;
  }

}
