import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CheckoutPageComponent} from './checkout-page.component';

import '@ui5/webcomponents/dist/Button';
import '@ui5/webcomponents/dist/Icon';
import '@ui5/webcomponents/dist/Label';
import '@ui5/webcomponents/dist/Input';
import '@ui5/webcomponents/dist/ComboBox';
import '@ui5/webcomponents/dist/DatePicker';

import '@ui5/webcomponents-fiori/dist/Page';
import '@ui5/webcomponents-fiori/dist/Bar';

import '@ui5/webcomponents-icons/dist/action-settings.js';
import '@ui5/webcomponents-icons/dist/home.js';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    CheckoutPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    CheckoutPageComponent
  ]
})
export class UI5CheckoutModule {


  constructor() {
  }


}
