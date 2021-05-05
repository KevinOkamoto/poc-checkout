import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    RtlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
