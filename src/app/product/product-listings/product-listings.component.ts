import { Component, OnInit } from '@angular/core';
import { products } from '../../protucts';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {
  products
  pictures: any =
    [
      {
        img: "./assets/img/img01.jpg"
      },
      {
        img: "./assets/img/img02.jpg"
      },
      {
        img: "./assets/img/img03.jpg"
      },
      {
        img: "./assets/img/img01.jpg"
      }
      
    ];

  constructor() { }

  ngOnInit(): void {
    this.products = products;
  }

}
