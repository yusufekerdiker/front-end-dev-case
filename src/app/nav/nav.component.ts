import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../models/product';
// import {fromEvent } from 'rxjs';
// import { filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  enteredSearchValue: string = '';
  isItIncludes: boolean = true;
  bundles: Product[] = [];
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  onSearchTextChanged(): any {
    // let a: any = this.searchTextChanged.emit(this.enteredSearchValue);

    // if (a !== '' && !this.bundles.toLocaleString().includes(a)) {
    //   this.isItIncludes = false;
    // } else {
    //   this.isItIncludes = true;
    // }
    // return a;
    return this.searchTextChanged.emit(this.enteredSearchValue);

    // this.searchTextChanged.emit(this.enteredSearchValue);
  }

  ngOnInit(): void {
  }

  // @ViewChild('input', {static: true}) input: ElementRef;

  // ngAfterViewInit() {
  //           // server-side search
  //       fromEvent<KeyboardEvent>(this.input.nativeElement,'keyup')
  //           .pipe(
  //               filter(Boolean),
  //               debounceTime(0),
  //               distinctUntilChanged(),
  //               tap((event:KeyboardEvent) => {
  //                 console.log(event)
  //                 // console.log(this.input.nativeElement.value)
  //               })
  //           )
  //           .subscribe();
  // }

}
