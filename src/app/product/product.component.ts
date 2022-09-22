import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  constructor(public productService: ProductService) {
    // this.isFounded = true;
    // this.query?.concat(JSON.parse(this.filterText));
    // this.query = JSON.stringify(this.filterText);
    // this.query = Object(this.filterText);
    // this.a = this.query.toLocaleString();
    // console.log(typeof(this.query.values().next(JSON.parse(this.filterText))));
    // console.log(typeof(this.query?.concat(JSON.parse(this.filterText))));
    // console.log(typeof(this.query?.push(JSON.parse(this.filterText))));
    // console.log(typeof(this.query?.map(JSON.parse(this.filterText))));
    // console.log(typeof(this.query?.join(JSON.parse(this.filterText))));
    // console.log(typeof this.query);
    // console.log(this.query);
    // console.log(this.a);
    // console.log(typeof this.filterText);
  }

  // a: any;
  // query: Product[];
  // bundlesFilter: any;
  // bundlesExists: boolean;
  // bundlesFilter: any;
  // isFounded = false;
  // idString: string;
  // filterText = '';
  title = 'Bundles';
  bundles: Product[] = [];

  ngOnInit() {
    // this.isFounded = false;

    // console.log('ben');
    this.productService.getProducts().subscribe((data: any) => {
      this.bundles = data;
      // this.idString = this.bundles.map((x)=>x.id).toLocaleString();
      // console.log(this.idString);

      // this.idString = this.bundles.map((x)=>Array.from(x.id).toString()).toLocaleString();

      // this.idString = JSON.stringify(data.filter((x)=>JSON.parse(x.id))[0].id)
      // console.log(this.idString);
      // JSON.stringify(this.bundles.filter((x) => JSON.parse(x.id)[0]));

      // this.bundles.forEach((element) => {
      //   if (
      //     element.name.toLocaleLowerCase().indexOf(this.filterText) == -1 ||
      //     element.bundle.toLocaleLowerCase().indexOf(this.filterText) == -1 ||
      //     element.studio.toLocaleLowerCase().indexOf(this.filterText) == -1
      //   ) {
      //     // this.isFounded = true;
      //     console.log('neredeyim');
      //   }
      //   else {
      //     // this.isFounded = false;
      //     console.log('help me');
      //   }
      // });
      // element.name.includes(this.filterText) ||
      // element.bundle.includes(this.filterText) ||
      // element.studio.includes(this.filterText)

      // element.name == this.filterText ||
      // element.bundle == this.filterText ||
      // element.studio == this.filterText

      // this.bundles = data;

      // bundle varmı kontrolü
      // this.bundlesExists = data.some(
      //   (x) =>
      //     x.name === this.filterText ||
      //     x.bundle === this.filterText ||
      //     x.studio === this.filterText
      // );

      // bundle içinde bu değerler var mı kontrolü
      // this.bundlesFilter = data.find(
      //   (z) =>
      //     z.name == this.filterText ||
      //     z.bundle == this.filterText ||
      //     z.studio == this.filterText
      // );

      // çözemedim
      // this.productService
      //   .getProducts()
      //   .pipe(
      //     map((y) =>
      //       y.find(
      //         (p) =>
      //           p.name === this.filterText ||
      //           p.bundle === this.filterText ||
      //           p.studio === this.filterText
      //       )
      //     )
      //   );

      // this.productService
      //   .getProducts()
      //   .pipe(
      //     map((bnd: Product[]) =>
      //       bnd.find(
      //         (p) =>
      //           p.name === this.filterText ||
      //           p.bundle === this.filterText ||
      //           p.studio === this.filterText
      //       )
      //     )
      //   );

      // this.productService
      //   .getProducts()
      //   .map((y) =>
      //     y.find(
      //       (p) =>
      //         p.name === this.filterText ||
      //         p.bundle === this.filterText ||
      //         p.studio === this.filterText
      //     )
      //   );

      // this.bundlesFilterCheck = data.map((bnd: Product[]) => bnd.find((p) => p.name === this.filterText));

      // this.filterText = JSON.stringify(this.query)
      // this.query.toLocaleString().includes(this.filterText, undefined)
      // this.query = Object(this.filterText);
      // this.a = this.query.toLocaleString();
      // console.log(this.query);
      // console.log(this.a);
      // console.log(typeof this.filterText);
    });
    // let a = this.bundles.find((x)=>x.id);
    // console.log('a', this.idString);
    // console.log(this.bundles.filter((x)=> x.id.split('')));

    // .filter((index) => index.id.indexOf(index.id.charAt(0).toString()))
    // console.log(this.bundles.forEach((x) => x.id));
    // console.log(this.bundles.filter((index) => index.id.charAt(0)).length.toLocaleString());
    // console.log(this.bundles.filter((index) =>index.id.indexOf(index.id.charAt(0).toString())));
    // console.log(this.bundles.filter((x) => x.id));
    // console.log(Object(this.bundles.map((x) => x.id.charAt(0))));
    // console.log(JSON.parse(this.bundles.map((x)=> x.id.charAt(0)).toLocaleString()));
    // console.log(this.bundles.forEach((x) => x.id.charAt));

    // this.query = Object(this.filterText);
    // this.a = this.query.toLocaleString();

    // this.productService.getProducts().pipe(map((bnd: Product[]) => bnd.find((p) => p.name === this.filterText || p.bundle === this.filterText || p.studio === this.filterText)));

    // this.bundlesExists = data.some((x) => x.name === this.filterText || x.bundle === this.filterText || x.studio === this.filterText);

    // this.productService
    //   .getProducts()
    //   .pipe(
    //     map((y) =>
    //       y.find(
    //         (p) =>
    //           p.name === this.filterText ||
    //           p.bundle === this.filterText ||
    //           p.studio === this.filterText
    //       )
    //     )
    //   );
    // map((y) =>y.find((p) =>p.name === this.filterText ||p.bundle === this.filterText ||p.studio === this.filterText));
  }

  getTotal = () => {
    return this.bundles.length.toLocaleString();
  };

  getFilteredId(numberToSearch: number) {
    return this.bundles
      .filter(
        (productCursor) =>
          productCursor.id.toLocaleString().slice(0, 1) ===
          Number(numberToSearch).toLocaleString()
      )
      .length.toLocaleString();
  }

  bundleCountRadioButton: string = 'All';
  onFilterRadioButtonChanged(rdbtnStr: string) {
    this.bundleCountRadioButton = rdbtnStr;
    console.log(this.bundleCountRadioButton);
  }

  searchText: string = '';
  onSearchTextEntered(newSearchValue: string): any {
    this.searchText = newSearchValue;
    console.log(this.searchText);

  }

  // getFilteredId(numb: string) {
  //   return this.bundles.filter((idNum)=> idNum.id.toLocaleString().slice(0) === Number(numb).toLocaleString()).length.toLocaleString();
  // }

  // getValueStartsWith = () => {
  //   for (let i = 0; i < this.bundles.length; i++) {
  //     this.idString = JSON.stringify(this.bundles.filter((bund) => bund.id ))
  //     // console.log(this.idString);
  //     //  === bund.id.charAt(i))[i].id)
  //     // .indexOf(this.bundles[i].id).toLocaleString()));
  //     // this.idString = this.bundles
  //     //   .map((x: Product) => x.id)
  //     //   .filter((y) => JSON.parse(y))
  //     //   [i].toLocaleString();
  //     //.startsWith(''+[i].toLocaleString().length)
  //     // JSON.parse(this.idString);
  //     return Object(this.idString);

  //   }
  //   console.log(this.idString);

  //   // this.idString = JSON.stringify(this.bundles.filter((x)=>JSON.parse(x.id))[0].id)
  //   // console.log(this.idString);

  //   // return JSON.parse(this.idString);
  //   // let i = 'abc';
  //   // return i;
  //   // return JSON.parse((this.bundles.map((x)=> x.id.split(''))));
  //   // return this.bundles.filter((index)=> Array.from(index.id)).toLocaleString()
  //   // .filter((index) => index.id.charAt(0))
  //   // .length.toLocaleString();
  // }

  // getIndexStartsWith() {
  //   // return this.bundles.filter((x) => x.id.charAt(0))
  //   // return Object(this.bundles.map((x)=> x.id.charAt(0)))
  //   // return JSON.parse(this.bundles.map((x)=> x.id.charAt(0)).toLocaleString())
  //   // return this.bundles.forEach((x)=> x.id.charAt)
  // }

  // private verifyPaidOrder(): Observable<Product[]> {
  //   this.productService.getProducts().subscribe((response => this.allOrders = response),(err) => { this.handleError(err); });

  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     this.query = Object(this.filterText);
  //     this.a = this.query.toLocaleString();
  //     console.log(this.query);
  //     console.log(this.a);
  //     console.log(typeof this.filterText);
  //   }, 5000);
  // }
}
