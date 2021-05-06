import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { AppComponent } from './app.component';
import { CheckoutModule } from './checkout-page/checkout-page.module';
import {
  RtlService,
  ShellbarModule,
  StepInputModule
} from '@fundamental-ngx/core';
import {
  FdpFormGroupModule,
  PlatformInputModule,
  PlatformTableModule
} from '@fundamental-ngx/platform';

import { CheckoutService } from './checkout.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CheckoutModule,
    ShellbarModule,
    FormsModule,
    ReactiveFormsModule,
    FdpFormGroupModule,
    PlatformInputModule,
    PlatformTableModule,
    StepInputModule
  ],
  providers: [
    RtlService,
    CheckoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
