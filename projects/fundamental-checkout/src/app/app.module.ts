import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheckoutModule } from './checkout-page/checkout-page.module';
import {
  DialogService,
  FdDatetimeModule,
  RtlService,
  ShellbarModule,
} from '@fundamental-ngx/core';
import { CheckoutService } from './checkout.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CheckoutModule,
    ShellbarModule,
    FdDatetimeModule
  ],
  providers: [
    RtlService,
    CheckoutService,
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
