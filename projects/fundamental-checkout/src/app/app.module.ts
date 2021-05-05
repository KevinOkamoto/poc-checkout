import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { CheckoutModule } from './checkout-page/checkout-page.module';
import { ShellbarModule } from '@fundamental-ngx/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CheckoutModule,
    ShellbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
