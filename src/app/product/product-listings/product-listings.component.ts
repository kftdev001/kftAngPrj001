import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { products } from '../../protucts';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any
  products2 : any
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products2 = products
    // this.products = this.productService.getProducts();

    const ProductObservable = this.productService.getProducts();
    ProductObservable.subscribe(
      (data) => {
        this.products = data
        // server側のfoundProductsがobjectになっていて苦戦した。{}を消してarrayにしたことで解決。
        // console.log('次のデータが出力されました： ' + data);
        //debugger
        //this.products = this.products2
      },
      (err) => { console.error('次のエラーが発生しました: ' + err) },
      () => { console.log('完了しました！'); }
    )

    // const observable = new Observable(subscriber => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.error('エラー発生');
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.complete();
    //   }, 1000);
    // });

    // console.log('just before subscribe');
    // observable.subscribe({
    //   next(data) { console.log('次のデータが出力されました： ' + data); },
    //   error(err) { console.error('次のエラーが発生しました: ' + err); },
    //   complete() { console.log('完了しました！'); }
    // });
    // console.log('subscribeから抜けました');

  }

}
