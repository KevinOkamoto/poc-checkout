import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
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
  requisition: Requisition;
  addressDB: Array<Address>;
  supplierDB: Array<Supplier>;
  userDB: Array<User>;
  commodityCodeDB: Array<CommodityCode>;
  lineItems$: Observable<LineItem[]>;


  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.addressDB = [];
    this.supplierDB = [];
    this.userDB = [];
    this.commodityCodeDB = [];

    this._loadAddresses();
    this._loadSuppliers();
    this._loadUsers();
    this._loadCC();
    this._loadLineItems();

    const address: Address = {
      zip: '7221',
      city: 'Yellowknife',
      country: 'Paraguay',
      address: '816-292 Ipsum St.',
      name: '816-292 Ipsum St., Yellowknife'
    };

    const supp: Supplier = {
      name: 'Ipsum Porta Elit Corp.',
      email: 'risus.Donec@non.edu',
      orgNumber: '942626 4439'
    };

    this.requisition = {
      title: 'iPhone 12 (128TB)',
      billingAddress: address,
      shippingAddress: address,
      supplier: supp,
      dueOn: new Date(2021, 12, 12),
      currency: 'CZK',
      requester: null,
      lineItems: []
    };
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
    this.lineItems$ = this.http.get<LineItem[]>('./assets/lineItems.json');

    //   .subscribe((items) => {
    //   items.forEach((i) => this.commodityCodeDB.push(i));
    //   this.cd.detectChanges();
    // });
  }

  onCBSelection(field: string, $event: any): void {
    if (field.includes('Address')) {
      this.requisition[field] = this.addressDB.filter((address) => address.name === $event)[0];
    } else if (field === 'supplier') {
      this.requisition[field] = this.supplierDB.filter((supplier) => supplier.name === $event)[0];
    } else if (field === 'requester') {
      this.requisition[field] = this.userDB.filter((supplier) => supplier.name === $event)[0];
    }
  }
}
