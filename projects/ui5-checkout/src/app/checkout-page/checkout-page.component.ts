import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Address, Requisition, Supplier} from '../model/models';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  requisition: Requisition;
  addressDB: Array<Address>;
  supplierDB: Array<Supplier>;


  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.addressDB = [];
    this.supplierDB = [];
    this._loadAddresses();
    this._loadSuppliers();

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
      dueOn: new Date(2021, 6, 23)
    };
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

  onCBSelection(field: string, $event: any): void {
    if (field === 'address') {
      this.requisition[field] = this.addressDB.filter((address) => address.name === $event)[0];
    } else if (field === 'supplier') {
      this.requisition[field] = this.supplierDB.filter((supplier) => supplier.name === $event)[0];
    }


  }
}
