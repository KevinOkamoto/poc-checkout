import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CheckoutService } from '../checkout.service';
import { Requisition } from '../models';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

  formGroup: FormGroup;
  requisition$: Observable<Requisition>;

  constructor(private service: CheckoutService) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({});
    this.requisition$ = this.service.getRequisition();
  }

}
