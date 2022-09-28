import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-radio-btn-filter',
  templateUrl: './radio-btn-filter.component.html',
  styleUrls: ['./radio-btn-filter.component.css'],
})
export class RadioBtnFilterComponent implements OnInit {
  // size = new Array<number>(9);
  // @Input('showAll') hepsiniGoster: string;
  // @Input() startsWith1: string;
  // @Input() startsWith2: string;
  // @Input() firstCharOfId: string;
  // @Input() idStartsWith: Product;
  // @Input() productValueOfId: Product[];

  @Input() showAll: string = '';

  @Input() radioBundles: string = '';

  selectedRadioButtonValue: string = 'All';

  @Output()
  filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  size = new Array<number>(9);

  constructor() {
  }

  onRadioButtonSelectionChange() {
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
  }

  // deneme = 9;
  // denemeMetodu(): any {
  //   if (this.deneme < 9) {
  //     this.deneme++;
  //   }
  // }

  ngOnInit() {
  }
}
