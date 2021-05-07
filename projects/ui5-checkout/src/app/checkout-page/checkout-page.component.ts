import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Address, CommodityCode, LineItem, Requisition, Supplier, User} from '../model/models';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutPageComponent implements OnInit, AfterViewInit {
  @Input()
  lineItemmsType: 'short' | 'long' = 'short';

  @Input()
  showFooter: boolean = false;

  @ViewChild('dialog', {static: true})
  dialog: ElementRef;

  requisition: Requisition;
  addressDB: Array<Address> = [];
  supplierDB: Array<Supplier> = [];
  userDB: Array<User> = [];
  commodityCodeDB: Array<CommodityCode> = [];

  lineItems$: Observable<LineItem[]>;
  pr$: Observable<Requisition>;
  currentLineItem: LineItem;


  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this._loadAddresses();
    this._loadSuppliers();
    this._loadUsers();
    this._loadCC();
    this._loadLineItems();
    this._loadRequisition();
  }

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }

  private _loadAddresses(): void {
    this.http.get<Address[]>('./assets/addresses.json').pipe(
      map((result) => {
        const newData = [];
        result.forEach(data => {
          newData.push({
            zip: data.zip,
            city: data.city,
            country: data.country,
            address: data.address,
            name: `${data.address}, ${data.city}`
          });
        });
        return newData;
      })
    ).subscribe((items) => {
      items.forEach((i) => this.addressDB.push(i));
      this.cd.detectChanges();
    });
  }

  private _loadSuppliers(): void {
    this.http.get<Supplier[]>('./assets/suppliers.json').subscribe((items) => {
      items.forEach((i) => this.supplierDB.push(i));
      this.cd.detectChanges();
    });
  }

  private _loadUsers(): void {
    this.http.get<User[]>('./assets/users.json').subscribe((items) => {
      items.forEach((i) => this.userDB.push(i));
      this.cd.detectChanges();
    });
  }

  private _loadCC(): void {
    this.http.get<CommodityCode[]>('./assets/cc.json').subscribe((items) => {
      items.forEach((i) => this.commodityCodeDB.push(i));
      this.cd.detectChanges();
    });
  }

  private _loadLineItems(): void {
    this.lineItems$ = this.http.get<LineItem[]>(`./assets/line-items-${this.lineItemmsType}.json`);
  }


  private _loadRequisition(): void {
    this.http.get<Requisition>(`./assets/requisitions-frank.json`).subscribe((r) => {
      this.requisition = r;
      this.cd.markForCheck();
    });
  }

  onCBSelection(requisition, field: string, $event: any): void {
    if (field.includes('Address')) {
      requisition[field] = this.addressDB.filter((address) => address.name === $event)[0];
    } else if (field === 'supplier') {
      requisition[field] = this.supplierDB.filter((supplier) => supplier.name === $event)[0];
    } else if (field === 'requester') {
      requisition[field] = this.userDB.filter((supplier) => supplier.name === $event)[0];
    }
  }

  openLIDetail(item: LineItem): void {
    this.currentLineItem = item;
    (this.dialog.nativeElement as any).show();
  }

  closeDialog(dialog: HTMLElement): void {
    (dialog as any).close();
    console.log(dialog)
    this.cd.markForCheck();
  }
}
