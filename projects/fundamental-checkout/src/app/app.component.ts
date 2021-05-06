import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CheckoutService } from './checkout.service';
import { Requisition } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  formGroup: FormGroup;
  title = 'fundamental-checkout';
  requisition$: Observable<Requisition>;

  constructor(private service: CheckoutService) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({});
    this.requisition$ = this.service.getRequisition();
  }
}
