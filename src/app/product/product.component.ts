import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  // filterText = '';
  title = 'Bundles';

  // a: any;
  // query: Product[];
  // bundlesFilter: any;
  // bundlesExists: boolean;
  // bundlesFilter: any;
  // isFounded = false;
  // idString: string;
  // isItIncludes: boolean = true;
  // arrSize = new Array<number>(9);
  bundles: Product[] = [];
  resultSearch: Product[] = [];
  bundleCountRadioButton: string = 'All';
  searchText: string = '';
  arr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  wth: string[];


  // condition() {
  //   let condition = "Aradığınız ürün bulunamadı!";
  //   if(this.resultSearch && this.resultSearch.length==0){
  //     return condition;
  //   }
  // }

  // ngOnChanges(changes: SimpleChanges) {
  //   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   //Add '${implements OnChanges}' to the class.
  //   console.log("ngonchanges called");
  //   console.log(changes);

  // }
  // idLength: number;

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

  getFilteredId(): any {
    for (let i = 0; i < this.bundles.length; i++) {
      let item = this.bundles[i].id;
      console.log("1:", item);
    }
    // return this.bundles.filter(
    //   (productCursor) => productCursor.id.toLocaleString().slice(0, 1) === Number().toLocaleString()
    // ).length.toLocaleString();
  }

  // numberToSearch = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // results: any[] = [];
  // ids: any;
  // getFilteredId(): any {
  //   this.ids = this.bundles.map(function (value) {
  //     return value.id;
  //   });
  //   this.ids.map((value: any) => {
  //     if (this.numberToSearch.indexOf(value) !== -1) {
  //       if (this.results.indexOf(value) === -1) {
  //         this.results.push(value);
  //       }
  //     }
  //     console.log(this.results);
  //   });
  // console.log(this.results.length);


  // this.bundles.forEach()
  // return this.bundles.filter(value => {
  //   return value.id == numberToSearch.toLocaleString();
  // });


  // for (let i = 1; i <= 9; i++) {
  //   this.getId(i);
  // }
  // for (var i = 0; i < this.bundles.length; i++){
  //   console.log((this.bundles[i].id).slice(0,1));
  // }
  // for (var i = 0; i < this.bundles.length; i++){
  //   console.log((this.bundles.map(x=>x.id)[i]).slice(0,1));
  // }
  // for (var i = 0; i < this.bundles.length; i++){
  //   console.log(this.bundles.filter((x)=>x.id)
  //   );
  // }
  // for (var i = 0; i < this.bundles.length; i++){
  //   console.log(this.bundles[i].id);
  // }
  // }

  getId(numberToSearch: number) {
    // let a: string[] = [];
    // a.push(this.bundles.map((x) => x.id.toString().slice(0, 1)).toString().)
    // console.log(a)

    for (var i = 1; i <= this.bundles.length; i++) {
      console.log(this.bundles[i]);
    }

    // a = a.push(this.bundles.map(value => value.id.indexOf(numberToSearch.toString()).toString().slice(0,1)).toString());
    // console.log("filtre string a",a.toString());

    // console.log("string a",a.toString());
    // console.log("saf a",a.toString());
    // let b: string[] = [];
    // b.join(a);
    // b.filter(x=> x==numberToSearch.toString()).length;
    // console.log("filtre a",a);
    // console.log("filtre string b",b);

    // let c = this.bundles.reduce(function(n, id){
    //   return  n + (id.id == numberToSearch.toString());
    // }, 0);
    // for (let i = 0; i <= numberToSearch ; i++) {
    //   if (a[i] == '7') {
    //     console.log("başardım");
    //   }
    // }
    // let b = a.filter()
    // let b = a.values()
    // let b = [...new Set(a)]
    // console.log("distinct",b);
    // let a = this.bundles.filter(
    //     (productCursor) => productCursor.id.toString().slice(0, 1) === Number(numberToSearch).toLocaleString()
    // ).length.toLocaleString();
    // console.log(a)
    // return a;
  }

  // getFilteredId(): any {
  //   this.bundles.map((x)=> {
  //    return console.log(x.id.slice(0,1));
  //   })
  // console.log(this.bundles[0].id.indexOf('1')+1);
  // this.bundles.map(item => {
  //   let id = item.id.indexOf('1')+1;
  //   if (item.id.slice(0,1) === "1") {
  //     let newArr = [];
  //     newArr.push(id);
  //     console.log(newArr)
  //   }
  // })
  // console.log(this.bundles.filter((productCursor) => productCursor.id.toLocaleString().slice(0, 1)));
  // iç içe iki döngü olacak ilkinde bundle id leri arasında ikincisinde ise 1 den 9 a kadarki numaralar arasında
  // return this.bundles.filter(
  //   (productCursor) =>{
  //     // console.log("uzunluk",productCursor.id.toLocaleString().slice(0, 1))
  //     productCursor.id.toLocaleString().slice(0, 1) === Number(1).toLocaleString();
  //   }
  // ).length.toLocaleString();
  // console.log("2",productCursor.id);
  // console.log("3",productCursor.id.toLocaleString().slice(0, 1));
  // console.log("4",Number(9).toLocaleString());
  // console.log("5",productCursor.id.toLocaleString().slice(0, 1) === Number(9).toLocaleString());
  // console.log("6",productCursor);
  // console.log("1",productCursor);
  // for (let i = 1; i <= this.arr.length; i++) {
  // this.wth = this.wth.join(this.bundles.filter((productCursor) => productCursor.id.toLocaleString().slice(0, 1) === Number(this.arr[i]).toLocaleString()).length.toLocaleString());
  //   this.idLength = this.bundles.filter((productCursor) => productCursor.id.toLocaleString().slice(0, 1) === Number(i).toLocaleString()).length;
  // }
  // return this.wth.length.toLocaleString();
  // return this.idLength;
  // }
  // callMe(num: number): any {
  //   for (let i = 1; i <= num; i++) {
  //     this.bundles.filter((productCursor) => productCursor.id.toLocaleString().slice(0, 1) === Number(i).toLocaleString()).length.toLocaleString();
  //   }
  // }
  // doesSearchValExists(val: string, arr: string ) {
  //   let isExists : boolean = true;
  //   for (let i = 0; i < arr.length; i++) {
  //     let name = arr[i];
  //     if(name == val) {
  //       isExists = true;
  //       break;
  //     } else {
  //       isExists = false;
  //       break;
  //     }
  //   }
  //   return isExists;
  // }
  // doesSearchValExists() {
  //   if(this.bundles.toLocaleString().includes(this.searchText)){
  //     // console.log(this.searchText);
  //   }
  // }

  onFilterRadioButtonChanged(rdbtnStr: string) {
    this.bundleCountRadioButton = rdbtnStr;
    console.log(this.bundleCountRadioButton);
  }

  onSearchTextEntered(newSearchValue: string): any {
    this.searchText = newSearchValue;
    console.log(this.searchText);
    this.resultSearch = this.bundles.filter((val: Product) => val.name.toLocaleLowerCase().indexOf(this.searchText) !== -1 || val.bundle.toLocaleLowerCase().indexOf(this.searchText) !== -1 || val.studio.toLocaleLowerCase().indexOf(this.searchText) !== -1);
    console.log(this.resultSearch);
    // this.resultSearch = this.searchText;
    // if (this.searchText !== '' && !this.bundles.toLocaleString().includes(this.searchText)) {
    //   this.isItIncludes = false;
    // } else {
    //   this.isItIncludes = true;
    // }

    // this.doesSearchValExists(this.searchText, this.bundles.toLocaleString());

    // while(true) {
    // if (this.bundles.toLocaleString().includes(this.searchText)) {
    //   this.isItIncludes = true;
    // } else {
    //   this.isItIncludes = false;
    // }
    // }
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
