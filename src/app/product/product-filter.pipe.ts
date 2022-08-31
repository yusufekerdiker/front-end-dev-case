import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: Product[], filterText: string): Product[] {
    let query = value.filter(
      (val) =>
        val.name.toLocaleLowerCase().indexOf(filterText) !== -1 ||
        val.bundle.toLocaleLowerCase().indexOf(filterText) !== -1 ||
        val.studio.toLocaleLowerCase().indexOf(filterText) !== -1
    );
    if (!filterText) {
      return value;
    } else {
      return query;
    }
    // name, bundle and studio

    // let pattern = filterText?filterText.toLocaleLowerCase():null
    // soru işareti if gibi bir şey eğer filtertext varsa lowercase yoksa null yap

    // return filterText?value.filter((p:Product)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }
}
