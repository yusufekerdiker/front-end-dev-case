import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-radio-btn-filter',
  templateUrl: './radio-btn-filter.component.html',
  styleUrls: ['./radio-btn-filter.component.css'],
})
export class RadioBtnFilterComponent implements OnInit {
  constructor() {}

  // @Input('showAll') hepsiniGoster: string;
  // @Input() startsWith1: string;
  // @Input() startsWith2: string;
  // @Input() firstCharOfId: string;
  // @Input() idStartsWith: Product;
  // @Input() productValueOfId: Product[];
  // size = new Array<number>(9);
  @Input() showAll: string = '';
  @Input() radioBundles: string = '';

  selectedRadioButtonValue: string = 'All';

  @Output()
  filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();
  onRadioButtonSelectionChange() {
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
  }

  deneme = 9;
  denemeMetodu(): any {
    if (this.deneme < 9) {
      this.deneme++;
    }
  }

  ngOnInit() {}
}
