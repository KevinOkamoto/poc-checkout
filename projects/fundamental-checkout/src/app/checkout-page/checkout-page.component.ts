import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DialogService } from '@fundamental-ngx/core';
import { Observable } from 'rxjs';
import { CheckoutService } from '../checkout.service';
import {
  Address,
  LineItem,
  Requisition,
  Supplier
} from '../models';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

  formGroup: FormGroup;
  formGroup2: FormGroup;
  lineItemFormGroup: FormGroup;

  requisition$: Observable<Requisition>;
  addresses$: Observable<Address[]>;
  suppliers$: Observable<Supplier[]>;
  lineItems$: Observable<LineItem[]>;

  constructor(
    private service: CheckoutService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({});
    this.formGroup2 = new FormGroup({});
    this.lineItemFormGroup = new FormGroup({});

    this.requisition$ = this.service.getRequisition();
    this.addresses$ = this.service.getAddresses();
    this.suppliers$ = this.service.getSuppliers();
    this.lineItems$ = this.service.getLineItems();
  }

  openLineItemDialog(dialog: TemplateRef<any>, item: LineItem): void {
    const dialogRef = this.dialogService.open(dialog, {
      responsivePadding: true,
      data: {
        item
      }
    });
  }
}
