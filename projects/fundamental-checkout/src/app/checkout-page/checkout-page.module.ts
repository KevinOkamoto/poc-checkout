import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {
  LayoutPanelModule,
  StepInputModule
} from '@fundamental-ngx/core';
import {
  FdpFormGroupModule,
  PlatformButtonModule,
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
    LayoutPanelModule,
    PlatformButtonModule,
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
