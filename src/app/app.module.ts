import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {ProductComponent} from './product/product.component';
import {ProductFilterPipe} from './pipes/product-filter.pipe';
import {FormsModule} from '@angular/forms';
import {RadioBtnFilterComponent} from './radio-btn-filter/radio-btn-filter.component';
import {HighlightDirective} from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductComponent,
    ProductFilterPipe,
    RadioBtnFilterComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
