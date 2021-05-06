import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {
  RtlService,
  StepInputModule
} from '@fundamental-ngx/core';
import {
  FdpFormGroupModule,
  PlatformInputModule,
  PlatformTableModule
} from '@fundamental-ngx/platform';
import { CheckoutPageComponent } from './checkout-page.component';


@NgModule({
  declarations: [
    CheckoutPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FdpFormGroupModule,
    PlatformInputModule,
    PlatformTableModule,
    StepInputModule,
  ],
  exports: [
    CheckoutPageComponent
  ]
})
export class CheckoutModule {
}
