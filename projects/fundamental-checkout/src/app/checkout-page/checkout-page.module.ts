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
  PlatformComboboxModule,
  PlatformDatePickerModule,
  PlatformInputGroupModule,
  PlatformInputModule,
  PlatformRadioGroupModule,
  PlatformSelectModule,
  PlatformTableModule,
  PlatformTextAreaModule
} from '@fundamental-ngx/platform';
import { CheckoutPageComponent } from './checkout-page.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CheckoutPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FdpFormGroupModule,
    LayoutPanelModule,
    PlatformButtonModule,
    PlatformComboboxModule,
    PlatformDatePickerModule,
    PlatformInputGroupModule,
    PlatformInputModule,
    PlatformRadioGroupModule,
    PlatformSelectModule,
    PlatformTableModule,
    PlatformTextAreaModule,
    StepInputModule,
  ],
  exports: [
    CheckoutPageComponent
  ]
})
export class CheckoutModule {
}
