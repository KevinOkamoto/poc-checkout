import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CheckoutPageComponent} from './checkout-page.component';

@NgModule({
  declarations: [
    CheckoutPageComponent
  ],
  imports: [
    BrowserModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
  ]
})
export class UI5CheckoutModule {
}
