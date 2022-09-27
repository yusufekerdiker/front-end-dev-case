import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../models/product';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: Product[], enteredSearchValue: string): Product[] {

    enteredSearchValue = enteredSearchValue.toLocaleLowerCase();
    let query = value ? value.filter((val: Product) => val.name.toLocaleLowerCase().indexOf(enteredSearchValue) !== -1 || val.bundle.toLocaleLowerCase().indexOf(enteredSearchValue) !== -1 || val.studio.toLocaleLowerCase().indexOf(enteredSearchValue) !== -1) : value;

    if (!value) {
      return [];
    }
    if (!enteredSearchValue) {
      // || !filterText.includes(newFilter.toLocaleString())
      //filtertext boşsa kartları yani bundle gönder
      return value;
    }
    // else {
    //filtertext varsa newFilterı yani case deki aramayı gönder
    // console.log("newFilter",newFilter)
    return query;
    // }

    // /*
    // let prodSize = value;
    // value = query;
    // let a: string = JSON.stringify(query);
    // let b: object = JSON.parse(a);
    // console.log('filter pipe filtertext karşlığı', filterText);
    // console.log('filter pipe a karşlığı', b);
    // console.log(Object.keys(b).length);
    // console.log('filter pipe value karşlığı değişim sonrası', value);
    // console.log(prodSize.length);
    // console.log('a karşlığı', a);
    // console.log('filter pipe value karşlığı', value);
    // console.log(value.length);
    // console.log("filter pipe a karşlığı",a);
    // console.log("filter pipe a karşlığı",a);
    // console.log("filter pipe newfilter karşlığı",newFilter);
    // console.log("newfilter karşlığı",newFilter);
    // let b = a.search(filterText);
    // console.log("a karşlığı",a);
    // console.log("b karşlığı",b);
    // let z = a.indexOf(filterText, b);
    // console.log("b karşlığı",b);
    // console.log("z değeri",z);
    // console.log("a ya filtex searchi yapınca b" ,b);
    // let newFilter = value.filter((val) =>val.name.toLocaleLowerCase().indexOf(filterText) !== -1 ||val.bundle.toLocaleLowerCase().indexOf(filterText) !== -1 ||val.studio.toLocaleLowerCase().indexOf(filterText) !== -1);
    // filterText?value.filter((val:Product) =>(val.name.toLocaleLowerCase().indexOf(filterText) !== -1):value ||(val.bundle.toLocaleLowerCase().indexOf(filterText) !== -1):value ||(val.studio.toLocaleLowerCase().indexOf(filterText) !== -1):value);
    // console.log(newFilter)
    // */

    // name, bundle and studio

    // let pattern = filterText?filterText.toLocaleLowerCase():null
    // soru işareti if gibi bir şey eğer filtertext varsa lowercase yoksa null yap

    // return filterText?value.filter((p:Product)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }
}
