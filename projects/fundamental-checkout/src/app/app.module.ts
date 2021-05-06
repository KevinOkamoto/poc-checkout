import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheckoutModule } from './checkout-page/checkout-page.module';
import {
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
    CheckoutModule,
    ShellbarModule,
  ],
  providers: [
    RtlService,
    CheckoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
